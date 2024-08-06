import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { setTerm } from '../../context/slices/searchTermSlice';

function SearchBar() {
  const searchTerm = useSelector((state) => state.searchTerm.value);
  const dispatch = useDispatch();
  const [v, setV] = useState(searchTerm);

  // Update Redux state when the button is clicked
  const handleSearch = () => {
    dispatch(setTerm(v));
  };

  return (
    <div className="flex-1 max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={v}
          onChange={(e) => setV(e.target.value)}
          className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
        />
        <button
          className="absolute right-0 top-0 mt-1.5 mr-1 px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
