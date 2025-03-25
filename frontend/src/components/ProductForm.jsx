import { useState } from "react";
import { addProduct } from "../context/ProductApi";

const ProductForm = ({ onProductAdded }) => {
    const [product, setProduct] = useState({ name: "", price: "", image: [], description: "", features: [] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        onProductAdded();
        setProduct({ name: "", price: "", image: [], description: "", features: [] });
    };

   console.log(product);

    const handleFeatureChange = (e, index) => {
        const newFeatures = [...product.features];
        newFeatures[index] = e.target.value;
        setProduct({ ...product, features: newFeatures });
    };

    const addFeature = () => {
        setProduct({ ...product, features: [...product.features, ""] });
    };

    const removeFeature = (index) => {
        const newFeatures = product.features.filter((_, i) => i !== index);
        setProduct({ ...product, features: newFeatures });
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
                multiple
                className="border p-2 w-full mb-2"
                onChange={(e) => setProduct({ ...product, image: Array.from(e.target.files) })}
            />
            <textarea
                placeholder="Description"
                className="border p-2 w-full mb-2"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            {product.features.map((feature, index) => (
                <div key={index} className="mb-2">
                    <input
                        type="text"
                        placeholder={`Feature ${index + 1}`}
                        className="border p-2 w-full mb-2"
                        value={feature}
                        onChange={(e) => handleFeatureChange(e, index)}
                    />
                    <button type="button" onClick={() => removeFeature(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                </div>
            ))}
            <button type="button" onClick={addFeature} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Add Feature</button>
            <br />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
        </form>
    );
};

export default ProductForm;
