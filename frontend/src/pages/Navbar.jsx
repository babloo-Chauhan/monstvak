import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaHeart, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { MdPerson, MdOutlineStorefront, MdOutlineLocalOffer, MdTrackChanges } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import { useCart } from "../context/CartContext";
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate()
  const location = useLocation()
  const [isSearchPage, setIsSearchPage] = useState(false)
  // const [isMobile] = useMobile()
  const params = useLocation()
  const searchText = params.search.slice(3)

  useEffect(() => {
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  }, [location])


  const redirectToSearchPage = () => {
    navigate("/search")
  }

  const handleOnChange = (e) => {
    const value = e.target.value
    const url = `/search?q=${value}`
    navigate(url)
  }

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
        <div className="w-60 hidden  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden md:flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200">
          <div className="">
            {
              (isSearchPage) ? (
                <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
                  <FaArrowLeft size={20} />
                </Link>
              ) : (
                <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
                  <IoSearch size={22} />
                </button>
              )
            }
          </div>
          <div className='w-full h-full'>
            {
              !isSearchPage ? (
                //not in search page
                <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Search "jhoomar"',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Search "chandliers"',
                      1000,
                      'Search "acrylic chandliers"',
                      1000,
                      'Search "maharaja chandliers"',
                      1000,
                      'Search "crystal chandliers"',
                      1000,
                      'Search "led chandliers"',
                      1000,
                      'Search "lamp chandliers"',
                      1000,
                      'Search "tradisional chandliers"',
                      1000,
                      'Search "Candle Chandeliers"',
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              ) : (
                //when i was search page
                <div className='w-full h-full'>
                  <input
                    type='text'
                    placeholder='Search for atta dal and more.'
                    autoFocus
                    defaultValue={searchText}
                    className='bg-transparent w-full h-full outline-none'
                    onChange={handleOnChange}
                  />
                </div>
              )
            }
          </div>

        </div>


        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <FaHeart className="cursor-pointer" />
          <Link to="/cart"
          >  <span className="absolute mb-2 ml-4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span><FaShoppingCart className="cursor-pointer text-yellow-500" />
          </Link>
          <Link to="/login">
            <button className="fl</Link>ex items-center gap-1"><MdPerson /> Login</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-yellow-500 p-4 space-y-4">
          <div className="w-60   min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden md:flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200">
            <div className="">
              {
                (isSearchPage) ? (
                  <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
                    <FaArrowLeft size={20} />
                  </Link>
                ) : (
                  <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
                    <IoSearch size={22} />
                  </button>
                )
              }
            </div>
            <div className='w-full h-full'>
              {
                !isSearchPage ? (
                  //not in search page
                  <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Search "jhoomar"',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Search "chandliers"',
                        1000,
                        'Search "acrylic chandliers"',
                        1000,
                        'Search "maharaja chandliers"',
                        1000,
                        'Search "crystal chandliers"',
                        1000,
                        'Search "led chandliers"',
                        1000,
                        'Search "lamp chandliers"',
                        1000,
                        'Search "tradisional chandliers"',
                        1000,
                        'Search "Candle Chandeliers"',
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                ) : (
                  //when i was search page
                  <div className='w-full h-full'>
                    <input
                      type='text'
                      placeholder='Search for atta dal and more.'
                      autoFocus
                      defaultValue={searchText}
                      className='bg-transparent w-full h-full outline-none'
                      onChange={handleOnChange}
                    />
                  </div>
                )
              }
            </div>

          </div>

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
