import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { SearchBar } from "./SearchBar";
import GuestOptions from "./GuestOptions";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../context/modeSlice/modeSlice";
import { Link } from "react-router-dom";
export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const theme = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  // Set theme-related classes
  const themeClasses =
    theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul
      className={`mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6`}
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        // className="p-1 font-normal"
        className={`p-1 font-italic ${textColor}`}
      >
        {/* <a href="#" className="flex items-center">
          Pages
        </a> */}
        <Link
          to="/"
          className={`flex items-center ${textColor} hover:text-blue-500 transition-colors duration-300`}
          aria-label="Home"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        // className="p-1 font-normal"
        className={`p-1 font-italic ${textColor}`}
      >
        {/* <a href="#" className="flex items-center">
          Pages
        </a> */}
        <Link
          to="/fav"
          className={`flex items-center ${textColor} hover:text-blue-500 transition-colors duration-300`}
          aria-label="Fav"
        >
          Favorites
        </Link>
      </Typography>
    </ul>
  );

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  return (
    <div
      className={`w-full overflow-auto ${themeClasses} transition-colors duration-300`}
    >
      <Navbar
        className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ${themeClasses} ${borderColor} border-b transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className={`mr-4 cursor-pointer py-1.5 font-medium text-lg ${textColor}`}
          >
            Movie App
          </Typography>

          {/* Centered Search Bar */}
          <SearchBar />
          {/* end of it */}

          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className={`h-6 w-6 ${textColor} hover:bg-transparent focus:bg-transparent active:bg-transparent`}
              ripple={false}
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m-5-5h1m16 0h1m-8-8l.707-.707M4.293 4.293L5 5m13.707 13.707l.707.707M4.293 19.707L5 19m11-11L14.293 4.293M12 5v14m-4-4h8"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5a7 7 0 00-7 7h1a6 6 0 016-6V5zM5 12a7 7 0 007 7v-1a6 6 0 01-6-6H5zM5 12a7 7 0 007 7v-1a6 6 0 01-6-6H5z"
                  />
                </svg>
              )}
            </IconButton>

            <div className="mr-4 hidden lg:block">{navList}</div>
            <GuestOptions />
            <IconButton
              variant="text"
              className={`ml-auto h-6 w-6 ${textColor} hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden`}
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              aria-label={openNav ? "Close Navigation" : "Open Navigation"}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex flex-col gap-2 p-4">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className={`text-${textColor}`}
            >
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign Up</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
