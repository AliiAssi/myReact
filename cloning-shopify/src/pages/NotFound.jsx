import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center mt-16">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
