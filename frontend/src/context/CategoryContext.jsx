import axios from "axios";

const API_URL = "http://localhost:3001/api/category";

export const addCategory = async (category) => {
    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("image", category.image);
    const result= await axios.post(`${API_URL}/add-category`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Result:", result); // Log result
    return result;
    
};

export const getCategories = async () => {
    return await axios.get(`${API_URL}/get`);
};

export const updateCategory = async (category) => {
    return await axios.put(`${API_URL}/update`, category);
};

export const deleteCategory = async (category) => {
    return await axios.delete(`${API_URL}/delete`, category);
};

export const getProductByCategory = async (category) => {
    return await axios.get(`${API_URL}/category/${category}`);
};

export const getProductBySubCategory = async (subCategory) => {
    return await axios.get(`${API_URL}/subcategory/${subCategory}`);
};


