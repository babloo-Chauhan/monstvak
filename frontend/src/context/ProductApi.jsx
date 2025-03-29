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
    product.features?.forEach((feature, index) => {
        formData.append(`features[${index}]`, feature);
    });

    product.category.forEach((category, index) => {
        formData.append(`category[${index}]`, category);
    });
    product.subCategory.forEach((subCategory, index) => {
        formData.append(`subCategory[${index}]`, subCategory);
    });
   
    formData.append("unit", product.unit);
    formData.append("stock", product.stock);
  
    formData.append("discount", product.discount);
   
    formData.append("more_details", JSON.stringify(product.more_details));
    formData.append("publish", product.publish);


    const result= await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Result:", result); // Log result
    return result;
};

export const getProducts = async () => {
    return await axios.get(API_URL);
};

export const getProduct = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const updateProduct = async (product) => {
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
    return await axios.put(`${API_URL}/${product._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

export const searchProduct = async (query) => {
    return await axios.get(`${API_URL}/search?name=${query}`);
};

export const filterProduct = async (query) => {
    return await axios.get(`${API_URL}/filter?${query}`);
};

export const getProductByCategory = async (category) => {
    return await axios.get(`${API_URL}/category/${category}`);
};

export const getProductBySubCategory = async (subCategory) => {
    return await axios.get(`${API_URL}/sub-category/${subCategory}`);
};



