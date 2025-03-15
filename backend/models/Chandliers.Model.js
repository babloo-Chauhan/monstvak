import mongoose from "mongoose";

const chandeliersSchema=mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Chandeliers= mongoose.model("Chandlier", chandeliersSchema);
export default Chandeliers;
