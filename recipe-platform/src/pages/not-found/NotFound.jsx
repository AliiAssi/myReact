import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Not Found</h1>
        <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
