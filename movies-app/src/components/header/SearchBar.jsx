import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from "../../context/searchTermSlice/searchTermSlice";

export function SearchBar() {
  const theme = useSelector((state) => state.mode.value);
  const s = useSelector((state) => state.searchTerm.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputBorderColor = theme === "light" ? "border-gray-300" : "border-gray-700";
  const inputFocusRingColor = theme === "light" ? "focus:ring-blue-500" : "focus:ring-yellow-500";
  const inputBgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const inputTextColor = theme === "light" ? "text-gray-900" : "text-white";
  const buttonBgColor = theme === "light" ? "bg-blue-500" : "bg-blue-600";
  const buttonTextColor = theme === "light" ? "text-white" : "text-gray-200";
  return (
    <div className="relative w-64">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className={`w-full px-3 py-2 border ${inputBorderColor} rounded-lg shadow-sm text-sm ${inputBgColor} ${inputTextColor} focus:outline-none ${inputFocusRingColor}`}
      />
      <button
        type="button"
        className={`absolute inset-y-0 right-0 flex items-center px-3 ${buttonBgColor} ${buttonTextColor} rounded-r-lg border ${inputBorderColor} shadow-sm focus:outline-none focus:ring-2 ${inputFocusRingColor}`}
        onClick={() => {dispatch(changeSearchTerm(value))}}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a7 7 0 014.7 12.15l5.65 5.65a1 1 0 001.42-1.42l-5.65-5.65A7 7 0 1111 4z"
          />
        </svg>
      </button>
    </div>
  );
}
