import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const [productQuantity, setproductQuantity] = useState(1);
  const location = useLocation();
  const { item } = location.state;
  const { addToCartFromSingleProduct } = useCart();
  const [selectedImage, setSelectedImage] = useState(item.image[0]);

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

        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 img-slider relative m-2 min-w-[40%] overflow-hidden rounded-[20px] bg-white lg:sticky lg:top-0 lg:mx-2 lg:mb-4 lg:h-fit lg:max-w-lg lg:rounded-3xl">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="flex space-x-2">
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
      <div className="w-full mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">You May Also Like</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="w-40 p-2 bg-white rounded-lg shadow-lg">
              <img
                src={item.image}
                alt="Related Product"
                className="w-full rounded-lg"
              />
              <p className="text-sm mt-2">Product Name</p>
              <p className="text-sm text-gray-600">Rs. 15,000</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
