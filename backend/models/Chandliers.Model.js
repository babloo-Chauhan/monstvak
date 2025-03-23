import mongoose from "mongoose";

const chandeliersSchema=mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
  // qty: { type: Number, default: 1 },
});

const Chandeliers= mongoose.model("Chandlier", chandeliersSchema);
export default Chandeliers;
