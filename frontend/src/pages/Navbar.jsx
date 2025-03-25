import { useState } from "react";
import { FaBars, FaTimes, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdPerson, MdOutlineStorefront, MdOutlineLocalOffer, MdTrackChanges } from "react-icons/md";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart}=useCart();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 border-b border-yellow-600 bg-gray-900 text-yellow-500">
        <div className="flex items-center gap-2">
          <span>🎧</span>
          <span>Hotline No.</span>
          <span className="text-white">+919711994994</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <button className="flex items-center gap-1"><MdOutlineStorefront /> Become A Franchisee</button>
          <button className="flex items-center gap-1"><MdPerson /> Sell On Monstvak</button>
          <Link to="/products" className="flex items-center gap-1"><MdOutlineLocalOffer /> Offer Products</Link>
          <button className="flex items-center gap-1"><MdTrackChanges /> Track Order</button>
        </div>
      </div>

      {/* Sticky Main Navbar */}
      <div className="sticky top-0 z-50 bg-gray-900 shadow-md flex justify-between items-center px-6 py-4 text-yellow-500">
        {/* Logo */}
        {/* <Link to="/" > */}
        <Link to="/" className="text-2xl font-bold text-yellow-500 ">MONSTVAK</Link>
        {/* </Link> */}

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md border border-yellow-500 rounded overflow-hidden">
          <input type="text" placeholder="Search" className="w-full p-2 text-white" />
          <button className="p-2"><FaSearch /></button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <FaHeart className="cursor-pointer" />
          <Link to="/cart"
          >  <span className="absolute mb-2 ml-4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span><FaShoppingCart className="cursor-pointer text-yellow-500" />   
          </Link>

          <button className="flex items-center gap-1"><MdPerson /> Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-yellow-500 p-4 space-y-4">
          <input type="text" placeholder="Search" className="w-full p-2 text-black border border-yellow-500 rounded" />
          <button className="flex items-center gap-1 w-full"><MdOutlineStorefront /> Become A Franchisee</button>
          <button className="flex items-center gap-1 w-full"><MdPerson /> Sell On Monstvak</button>
          <button className="flex items-center gap-1 w-full"><MdOutlineLocalOffer /> Offer Products</button>
          <button className="flex items-center gap-1 w-full"><MdTrackChanges /> Track Order</button>
          <button className="flex items-center gap-1 w-full"><FaHeart /> Wishlist</button>
          <button className="flex items-center gap-1 w-full"><FaShoppingCart /> Cart</button>
          <button className="flex items-center gap-1 w-full"><MdPerson /> Login</button>
        </div>
      )}
    </>
  );
}

export default Navbar;
