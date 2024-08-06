import React, { useState } from "react";
import { FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";


function Navbar() {
  const user = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-2xl rounded-md flex items-center justify-between ${
        isMenuOpen ? "mb-5" : null
      }`}
    >
      <div className="flex-1 flex items-center">
        <Link to="/" className="text-white text-2xl font-bold mr-8">
          Shopify
        </Link>
        <SearchBar />
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white ml-4 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`lg:flex lg:items-center lg:space-x-4 ${
          isMenuOpen
            ? "block bg-gradient-to-r from-blue-500 to-teal-500"
            : "hidden"
        } 
        absolute top-16 left-0 w-full  lg:static lg:w-auto lg:bg-transparent`}
      >
        <Link to="/about" className="text-white hover:text-gray-200 py-1 px-4">
          About
        </Link>
        {!user ? (
          <>
            <Link
              to="/?login=true"
              className="text-white hover:text-gray-200 py-1 px-4 flex items-center"
            >
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
            <Link
              to="/?register=true"
              className="text-white hover:text-gray-200 py-1 px-4 flex items-center"
            >
              <FaUserPlus className="mr-2" />
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/?dash=true"
              className="text-white hover:text-gray-200 py-1 px-4 flex items-center"
            >
              Dashboard
            </Link>

            <Link
              to="/cart"
              className="hover:text-gray-200 py-1 px-4 flex items-center"
            >
              <CartIcon itemCount ={cartItems.length} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
