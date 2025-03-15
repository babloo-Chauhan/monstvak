import { Route, Routes,  } from "react-router-dom";
import {  Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import ContactUs from "./pages/ContactUs";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
  
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    
  );
};

export default App;