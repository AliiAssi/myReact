import React from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from 'react-redux';

function GuestOptions() {
  const theme = useSelector((state) => state.mode.value);

  // Set theme-related classes
  const buttonTextColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <div className="flex items-center gap-x-1">
      <Button variant="text" size="sm" className={`hidden lg:inline-block ${buttonTextColor}`}>
        <span>Log In</span>
      </Button>
      <Button
        variant="gradient"
        size="sm"
        className={`hidden lg:inline-block rounded-md transition-colors duration-300`}
      >
        <span>Sign Up</span>
      </Button>
    </div>
  );
}

export default GuestOptions;
