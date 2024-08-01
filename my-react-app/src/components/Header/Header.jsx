import React, { useState } from 'react';

function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <header className="bg-blue-800 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-extrabold">
          <a href="/" className="hover:text-gray-200 transition">My App</a>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-lg hover:text-gray-300 transition">Home</a>
            </li>
            {userLoggedIn ? (
              <li>
                <a href="/profile" className="text-lg hover:text-gray-300 transition">Profile</a>
              </li>
            ) : (
              <>
                <li>
                  <a href="/login" className="text-lg hover:text-gray-300 transition">Login</a>
                </li>
                <li>
                  <a href="/register" className="text-lg hover:text-gray-300 transition">Register</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
