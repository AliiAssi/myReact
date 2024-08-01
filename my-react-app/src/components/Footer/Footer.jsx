import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 bottom-0 left-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
