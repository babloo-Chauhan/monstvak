import { Route, Routes,  } from "react-router-dom";
import {  Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import ContactUs from "./pages/ContactUs";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
const App = () => {
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
  
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} key={cart._id} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/single" element={<SingleProduct  />} />
        <Route path="/checkout" element={<Checkout  />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/add" element={<><ProductForm onProductAdded={() => setRefresh(!refresh)} /><ProductList key={refresh} /></>} />
     <Route path="/search" element={<SearchPage/>} />
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/account" element={<Account/>}/>
      </Routes>
       {/* <ProductForm onProductAdded={() => setRefresh(!refresh)} /> */}
      
    </>
    
  );
};

export default App;