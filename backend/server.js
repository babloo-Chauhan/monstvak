import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Razorpay from 'razorpay'

import subCategoryRouter from "./routes/subCategory.route.js";
import userRouter from "./routes/user.route.js";
import productRouters from "./routes/product.route.js";
import categoryRouters from "./routes/category.route.js";
import uploadRouter from "./routes/upload.router.js";
import { v2 as cloudinary } from "cloudinary";
import crypto from 'crypto'
import cartRouter from "./routes/cart.route.js";




dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

 // Configuration
    cloudinary.config({
      cloud_name: "dh7fgb3vg",
      api_key: "479965845347275",
      api_secret: "aZ5Lq5EgXm3Y5tO_I_G12dXyWL4", // Click 'View API Keys' above to copy your API secret
    });

try {
  mongoose.connect(
    "mongodb+srv://b8416800849:DsOXKRMdGz1LqTjd@cluster0.cdmve.mongodb.net/",
    {}
  );
  console.log("Connected to Mongoose");
} catch (error) {

  console.log("error: ", error);
  
}

const razorpay = new Razorpay({
  key_id: "rzp_live_GcGnC4AkRptxDR",
  key_secret: "zKzuthu7gVdDxLrdFRiK63Ej",
});

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});




app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const secret = "YOUR_RAZORPAY_SECRET";

  const hash = crypto
    .createHmac("sha256", secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (hash === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});


app.use("/api/users", userRouter);
app.use("/api/products", productRouters);
app.use("/api/category", categoryRouters);
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)
app.use("/api/carts",cartRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
