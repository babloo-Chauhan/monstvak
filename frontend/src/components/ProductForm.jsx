import { useState } from "react";
import { addProduct } from "../context/ProductApi";

const ProductForm = ({ onProductAdded }) => {
    const [product, setProduct] = useState({ name: "", price: "", image: null });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        onProductAdded();
        setProduct({ name: "", price: "", image: null });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg">
            <input
                type="text"
                placeholder="Product Name"
                className="border p-2 w-full mb-2"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                className="border p-2 w-full mb-2"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
            <input
                type="file"
                className="border p-2 w-full mb-2"
                onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
        </form>
    );
};

export default ProductForm;
