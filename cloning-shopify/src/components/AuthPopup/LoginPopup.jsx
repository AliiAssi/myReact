import React, { useState } from 'react';
import { FaTimes, FaSpinner, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {setUser} from '../../context/slices/userSlice';
function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();


  const handleSubmission = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // const apiUrl = import.meta.env.VITE_API_URL;

    try {
      // const response = await fetch(`${apiUrl}/user/login`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: email, // Adjust according to API specification
      //     password,
      //     expiresInMins: 30, // Optional parameter
      //   }),
      // });
      setSuccess('Login successful!');
      setTimeout(() => {
        const user = {
          firstName  : "Ali",
          lastName   : "Assi",
          email      : "ali@example.com"
        };
        dispatch(setUser(user));
        onClose();
      }, 1500); 
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmission}>
          <div className="mb-4">
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          {error && (
            <div className="flex items-center text-red-600 mb-4">
              <FaExclamationCircle size={20} className="mr-2" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-center text-green-600 mb-4">
              <FaCheckCircle size={20} className="mr-2" />
              <span>{success}</span>
            </div>
          )}
          {isLoading && (
            <div className="flex items-center text-gray-600 mb-4">
              <FaSpinner size={20} className="mr-2 animate-spin" />
              <span>Logging in...</span>
            </div>
          )}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
