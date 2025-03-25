import axios from "axios";

const API_URL = "http://localhost:3001/api/products";

export const addProduct = async (product) => {
    
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    product.image.forEach((image, index) => {
        formData.append(`image`, image);
    
    });
    product.features.forEach((feature, index) => {
        formData.append(`features[${index}]`, feature);
    });

    const result= await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Result:", result); // Log result
    return result;
};

export const getProducts = async () => {
    return await axios.get(API_URL);
};
