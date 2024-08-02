import React from 'react';
import useLocalStorage from './hooks/CustomHook';

function Banner() {
  const [mode, setMode] = useLocalStorage('mode', 'dark');

  const isDarkMode = mode === 'dark';

  const toggleMode = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div
      className={`p-6 max-w-4xl mx-auto rounded-lg shadow-md transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h1 className="text-3xl font-bold mb-2">Welcome to Our Website</h1>
      <p className="text-lg mb-4">
        We are delighted to have you here. Explore our features and discover what we have to offer.
      </p>
      <button
        onClick={toggleMode}
        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-blue-500 text-white hover:bg-blue-400'
        }`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default Banner;
