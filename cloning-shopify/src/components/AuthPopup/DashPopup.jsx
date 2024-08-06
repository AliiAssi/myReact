import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { FaTimes } from 'react-icons/fa'; // Optional: for a close button

function DashPopup({ isOpen, onClose }) {
  // Access the user data from Redux state
  const user = useSelector(state => state.user.value); // Adjust the state path according to your Redux setup

  if (!isOpen) return null; // Return null if the popup is not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">First Name:</p>
          <p className="text-gray-900">{user.firstName}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Last Name:</p>
          <p className="text-gray-900">{user.lastName}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Email:</p>
          <p className="text-gray-900">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default DashPopup;
