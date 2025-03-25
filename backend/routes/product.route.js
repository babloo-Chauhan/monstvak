import { Router } from "express";
// import auth from "../middleware/auth.js";
import multer from "multer";

import {
  createProductController,
  deleteProductDetails,
  getAllProduct,
  getProductByCategory,
  getProductByCategoryAndSubCategory,
  getProductController,
  getProductDetails,
  searchProduct,
  updateProductDetails,
} from "../controllers/product.controller.js";
import { admin } from "../middleware/Admin.js";

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

export const upload = multer({ storage });

const productRouter = Router();

productRouter.post("/", upload.array("image"), createProductController);
productRouter.post("/get", getProductController);
productRouter.post("/get-product-by-category", getProductByCategory);
productRouter.post(
  "/get-pruduct-by-category-and-subcategory",
  getProductByCategoryAndSubCategory
);
productRouter.post("/get-product-details", getProductDetails);

//update product
productRouter.put("/update-product-details",  updateProductDetails);

//delete product
productRouter.delete("/delete-product",  deleteProductDetails);

//search product
productRouter.post("/search-product", searchProduct);

//get all products
productRouter.get("/", getAllProduct);

productRouter.get("/check", async (req, res) => {
  res.send("Hello");
});

export default productRouter;
