import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
    const { cart } = useCart();
    const location = useLocation();
    const { item, subtotal, shipping, totalItems, productQuantity } =
        location.state || {};
    // const subtotals = cart.reduce((sum, item) => sum + item.price, 0);
    // const total = subtotal + (item ? item.price : 0);
    console.log(subtotal)
   const totalprice=subtotal+shipping;
   

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center py-10">
            <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>

                {/* Contact */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email or Mobile</label>
                    <input
                        type="text"
                        className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded-md"
                    />
                </div>

                {/* Delivery Details */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Delivery Address</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-2 bg-gray-700 border border-gray-600 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-2 bg-gray-700 border border-gray-600 rounded-md"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded-md"
                    />
                    <div className="mt-2 grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="p-2 bg-gray-700 border border-gray-600 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="p-2 bg-gray-700 border border-gray-600 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="p-2 bg-gray-700 border border-gray-600 rounded-md"
                        />
                    </div>
                </div>

                {/* Cart Summary */}

                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Order Summary</h3>
                    <div className="mt-2 space-y-2">
                        {item ? (

                            
                            <>
                                <div className="flex justify-between bg-gray-700 p-2 rounded-md">
                                    <img src={item.image} alt="" className="w-10 h-10" />
                                    <span>{item.title}</span>
                                    <span>
                                        ₹
                                        {productQuantity
                                            ? `${item.price} X ${productQuantity}`
                                            : item.price}
                                    </span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold mt-3">
                                    <span>Total:</span>
                                    <span>
                                        ₹
                                        {productQuantity
                                            ? item.price * productQuantity
                                            : item.price}
                                    </span>
                                </div>
                            </>
                        ) : (<>
                            {cart.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex justify-between bg-gray-700 p-2 rounded-md"
                                >
                                    <img src={item.image} alt="" className="w-10 h-10" />
                                    <span>{item.title}</span>
                                    <div className="item-price-qty">
                                        <span>
                                            ₹{item.price}X{item.qty}
                                        </span>
                                    </div>
                                </div>

                            ))}
                            <div className="flex justify-between text-lg font-semibold mt-3">
                                <span>Total:</span>
                                <span>₹{subtotal}</span>
                            </div>
                        </>

                        )}
                    </div>
                </div>

                {/* Payment */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Payment</h3>
                    <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md">
                        <option>Credit/Debit Card</option>
                        <option>UPI / Wallets</option>
                        <option>Net Banking</option>
                    </select>
                </div>

                {/* Pay Button */}
                {localStorage.getItem("token")?
                (
              <Link to={{ pathname: '/payment' }} state={{ totalprice,subtotal,item,productQuantity,cart}}>
                    <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold">
                        Pay Now
                    </button>
                </Link>)
                :

                (
                <Link to="/login">
                    <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold">
                        Pay Now
                    </button>
                </Link>
                )}

            </div>
        </div>
    );
};

export default Checkout;
