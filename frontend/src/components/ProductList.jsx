import { useEffect, useState } from "react";
import { getProducts } from "../context/ProductApi";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data } = await getProducts();
        setProducts(data);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Product List</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="p-4 border rounded-lg shadow">
                        <img src={`http://localhost:5000${product.image}`} alt={product.name} className="w-full h-40 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
