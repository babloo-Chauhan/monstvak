import ProductModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { upload } from "../routes/product.route.js";
import { unlink } from "fs";

export const createProductController = async (request, response,) => {

 
  
  try {

    const uploadedFiles = [];
    const {
      name,
      // image,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
      more_details,
      features,
    } = request.body;

    console.log(1);

    // if (
    //   !name ||
    //   // !image[0] ||
    //   !category[0] ||
    //   !subCategory[0] ||
    //   !unit ||
    //   !price ||
    //   !description
    // ) {
    //   return response.status(400).json({
    //     message: "Enter required fields",
    //     error: true,
    //     success: false,
    //   });
    // }

    // Upload an image
    console.log({ backend: request.files.map((file) => file.path) });
    const images = request.files.map((file) => file.path);
    console.log("i", images);




    // Loop through files and upload to Cloudinary
    for (const file of request.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "uploads", // Cloudinary folder
      });

      uploadedFiles.push(result.secure_url);
      console.log(file.path);
      // Remove file from local storage after upload
       unlink(file.path, (err) => {
         if (err) throw err;
         console.log("image  was deleted from local storage");
       });
    }

    const product = new ProductModel({
      name,
      image: uploadedFiles,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
      more_details,
      features,
    });

    console.log(3);
    console.log(product);
    const saveProduct = await product.save();
    console.log("saveproduct", saveProduct);

    console.log(4);

    //  Delete the file from the server

    // Delete the files from the server
    // images.forEach((image) => {
    //   fs.unlink(image, (err) => {
    //     if (err) console.log(err);
    //     else console.log('file removed');
    //   });
    // });

    console.log(5);
    return response.json({
      message: "Product Created Successfully",
      data: saveProduct,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductController = async (request, response) => {
  try {
    let { page, limit, search } = request.body;

    if (!page) {
      page = 1;
    }

    if (!limit) {
      limit = 10;
    }

    const query = search
      ? {
          $text: {
            $search: search,
          },
        }
      : {};

    const skip = (page - 1) * limit;

    const [data, totalCount] = await Promise.all([
      ProductModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category subCategory"),
      ProductModel.countDocuments(query),
    ]);

    return response.json({
      message: "Product data",
      error: false,
      success: true,
      totalCount: totalCount,
      totalNoPage: Math.ceil(totalCount / limit),
      data: data,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductByCategory = async (request, response) => {
  try {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({
        message: "provide category id",
        error: true,
        success: false,
      });
    }

    const product = await ProductModel.find({
      category: { $in: id },
    }).limit(15);

    return response.json({
      message: "category product list",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductByCategoryAndSubCategory = async (request, response) => {
  try {
    const { categoryId, subCategoryId, page, limit } = request.body;

    if (!categoryId || !subCategoryId) {
      return response.status(400).json({
        message: "Provide categoryId and subCategoryId",
        error: true,
        success: false,
      });
    }

    if (!page) {
      page = 1;
    }

    if (!limit) {
      limit = 10;
    }

    const query = {
      category: { $in: categoryId },
      subCategory: { $in: subCategoryId },
    };

    const skip = (page - 1) * limit;

    const [data, dataCount] = await Promise.all([
      ProductModel.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
      ProductModel.countDocuments(query),
    ]);

    return response.json({
      message: "Product list",
      data: data,
      totalCount: dataCount,
      page: page,
      limit: limit,
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductDetails = async (request, response) => {
  try {
    const { productId } = request.body;

    const product = await ProductModel.findOne({ _id: productId });

    return response.json({
      message: "product details",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//update product
export const updateProductDetails = async (request, response) => {
  try {
    const { _id } = request.body;

    if (!_id) {
      return response.status(400).json({
        message: "provide product _id",
        error: true,
        success: false,
      });
    }

    const updateProduct = await ProductModel.updateOne(
      { _id: _id },
      {
        ...request.body,
      }
    );

    return response.json({
      message: "updated successfully",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//delete product
export const deleteProductDetails = async (request, response) => {
  try {
    const { _id } = request.body;

    if (!_id) {
      return response.status(400).json({
        message: "provide _id ",
        error: true,
        success: false,
      });
    }

    const deleteProduct = await ProductModel.deleteOne({ _id: _id });

    return response.json({
      message: "Delete successfully",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//search product
export const searchProduct = async (request, response) => {
  try {
    let { search, page, limit } = request.body;

    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 10;
    }

    const query = search
      ? {
          $text: {
            $search: search,
          },
        }
      : {};

    const skip = (page - 1) * limit;

    const [data, dataCount] = await Promise.all([
      ProductModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category subCategory"),
      ProductModel.countDocuments(query),
    ]);

    return response.json({
      message: "Product data",
      error: false,
      success: true,
      data: data,
      totalCount: dataCount,
      totalPage: Math.ceil(dataCount / limit),
      page: page,
      limit: limit,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// get all product

export const getAllProduct = async (request, response) => {
  try {
    const product = await ProductModel.find();

    return response.json({
      message: "All product",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
