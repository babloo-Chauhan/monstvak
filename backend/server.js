import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Chandeliers from "./routes/chandeliers.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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
app.use("/api", Chandeliers);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
