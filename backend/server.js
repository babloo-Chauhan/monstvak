import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import subCategoryRouter from "./routes/subCategory.route.js";
import productRouters from "./routes/product.route.js";
import categoryRouters from "./routes/category.route.js";
import uploadRouter from "./routes/upload.router.js";
import { v2 as cloudinary } from "cloudinary";




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


// app.use("/api/users", require("./routes/userRoutes"));

// app.use("/api/products", productRoutes);
app.use("/api/products", productRouters);
app.use("/api/category", categoryRouters);
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
