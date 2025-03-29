import axios from "axios";

const API_URL = "http://localhost:3001/api/subcategory";

export const addSubCategory = async (subCategory) => {
    const formData = new FormData();
    formData.append("name", subCategory.name);
    formData.append("image", subCategory.image);
    formData.append("category", subCategory.category);
    const result= await axios.post(`${API_URL}/add-subcategory`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Result:", result); // Log result
    return result;
    
}
export const getSubCategories = async () => {
    return await axios.post(`${API_URL}/get`);
};

export const updateSubCategory = async (subCategory) => {
    return await axios.put(`${API_URL}/update`, subCategory);
};

export const deleteSubCategory = async (subCategory) => {
    return await axios.delete(`${API_URL}/delete`, subCategory);
};

export const getProductByCategory = async (category) => {
    return await axios.get(`${API_URL}/category/${category}`);
};

export const getProductBySubCategory = async (subCategory) => {
    return await axios.get(`${API_URL}/subcategory/${subCategory}`);
};



export const getSubCategoryByCategory = async (category) => {
    return await axios.get(`${API_URL}/category/${category}`);
};

export const getSubCategoryBySubCategory = async (subCategory) => {
    return await axios.get(`${API_URL}/subcategory/${subCategory}`);
};

export const getSubCategoryById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const getSubCategoryByName = async (name) => {
    return await axios.get(`${API_URL}/name/${name}`);
};

export const getSubCategoryBySlug = async (slug) => {
    return await axios.get(`${API_URL}/slug/${slug}`);
};




