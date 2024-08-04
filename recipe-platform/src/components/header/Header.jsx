import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {GlobalContext} from '../../context/GlobalContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [searchTerm, setSearchTerm] = useState("");
  const { state, setState } = useContext(GlobalContext);
  const navigate = useNavigate();


  useEffect(() => {
    setState({...state, searchTerm});
    navigate('/');
  }, [searchTerm]);

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Function to determine if a link is active
  const getLinkClass = (path) =>
    `text-white ${
      activeLink === path ? "border-b-2 border-gray-200" : ""
    } hover:text-gray-200 transition duration-300`;

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Implement search functionality here if needed
  };

  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-extrabold">My App</h1>
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={getLinkClass("/")} aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/user-favorites"
                className={getLinkClass("/user-favorites")}
                aria-label="Favorites"
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={getLinkClass("/contact-us")}
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="pl-12 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.768 12.165a5.5 5.5 0 001.14-3.415C14.907 4.82 11.937 1.85 8 1.85S1.092 4.82 1.092 8c0 3.047 2.448 5.5 5.5 5.5 1.16 0 2.241-.38 3.115-1.018l2.635 2.635a.75.75 0 001.061-1.061l-2.184-2.183zm-5.518-.465a4 4 0 110-8 4 4 0 010 8z"
                fill="#4A5568"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
