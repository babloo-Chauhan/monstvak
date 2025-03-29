import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProducts } from "../context/ProductApi";


const SingleProduct = () => {
  const [productQuantity, setproductQuantity] = useState(1);
  const location = useLocation();
  const { item } = location.state;
  const { addToCartFromSingleProduct } = useCart();
  const [selectedImage, setSelectedImage] = useState(item.image[0]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  
// fetch related product

    useEffect(() => {
    
      const fetchRelatedProducts = async () => {
        try {
          const { data } = await getProducts();
        
          // Filter related products based on category

          const related = data.data.filter(
            (product) =>
              product.category.some((catId) => item.category.includes(catId)) &&
              product.category[0] === item.category[0] &&
              product._id !== item._id
          );
          console.log("related", related);
          setRelatedProducts(related);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      };
      fetchRelatedProducts();
    }, []);
  





  const handleIncrement = () => {
    setproductQuantity(productQuantity + 1);
  };
  const handleDecrement = () => {
    setproductQuantity(productQuantity <= 1 ? 1 : productQuantity - 1);
  };

 

  return (
    <>
      <div className="flex flex-col  md:flex-row justify-center min-h-screen p-4 bg-gray-100">
        {/*  Left Section - Images */}

        <div className="flex flex-col items-center   md:w-1/2 space-y-4 img-slider relative m-2 min-w-[40%] overflow-hidden rounded-[20px] bg-white lg:sticky lg:top-0 lg:mx-2 lg:mb-4 lg:h-fit lg:max-w-lg lg:rounded-3xl">
        
          <img
            src={selectedImage}
            alt="Product"
            className="w-full md:w-96 h-auto object-cover rounded-lg"
          />
          <div className="flex  items-center space-x-2">
            {item.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 rounded-lg cursor-pointer hover:opacity-75"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

        </div>

        {/*  Right Section - Product Details */}

        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
          <p className="text-gray-600 text-lg">
            <span className="text-red-500 line-through">Rs. 77,398.00</span>
            <span className="text-green-600 font-semibold text-xl ml-2">
              {item.price}
            </span>
          </p>
          <p className="text-gray-500 mt-2">Free shipping PAN India</p>
          <p className="text-gray-500">Delivery Time: 3-5 working days</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              className="px-3 py-1 bg-gray-300 rounded-l"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100 border">
              {productQuantity}
            </span>
            <button
              className="px-3 py-1 bg-gray-300 rounded-r"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col space-y-3">
            <Link
              to={{ pathname: "/checkout" }}
              state={{ item, productQuantity }}
            >
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Buy It Now
              </button>
            </Link>

            <button
              className="w-full border py-2 rounded-lg hover:bg-gray-200"
              onClick={() => addToCartFromSingleProduct(item, productQuantity)}
            >
              Add to Cart
            </button>
          </div>

          {/*  Product Description */}
          {/* Product Description */}
          <div className="mt-6 text-gray-700">
            <p>{item.description}</p>
          </div>

          <div className="mt-6 text-gray-700">

            <ul className="list-disc list-inside mt-2">
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {relatedProducts.map((product) => (
           <Link to={{ pathname: '/single' }} state={{ item: product }}>
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 line-through">Rs. {product.oldPrice}</p>
            <p className="text-red-500 font-bold">Rs. {product.newPrice}</p>
          
            <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800">View</button>
            
          </div>
          </Link>
        ))}
      </div>

    </>
  );
};

export default SingleProduct;
