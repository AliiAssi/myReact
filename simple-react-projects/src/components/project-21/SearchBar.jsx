import React from 'react';

function SearchBar({ city, setCity, isInvoked, setIsInvoked }) {
  const handleSearchClick = () => {
    setIsInvoked(!isInvoked); // Trigger the fetch operation
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search..."
          className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 014.78 12.22l3.23 3.23a1 1 0 01-1.42 1.42l-3.23-3.23A7 7 0 1111 4z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
