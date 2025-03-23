import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const addProduct = async (product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("image", product.image);

    return await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};

export const getProducts = async () => {
    return await axios.get(API_URL);
};
