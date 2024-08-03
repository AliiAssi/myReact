import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Update active link when route changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Function to determine if a link is active
  const getLinkClass = (path) =>
    `text-white ${
      activeLink === path ? "border-b-2 border-gray-200" : ""
    } hover:text-gray-200 transition duration-300`;

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={getLinkClass("/")} aria-label="Home">
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                to="/recipe-details"
                className={getLinkClass("/recipe-details")}
                aria-label="recipe-details"
              >
                Recipe
              </Link>
            </li> */}
            <li>
              <Link
                to="/user-favorites"
                className={getLinkClass("/user-favorites")}
                aria-label="user-details"
              >
                favorites
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
