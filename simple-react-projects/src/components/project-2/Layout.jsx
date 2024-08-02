import React, { useState, useEffect } from 'react';

function Layout() {
  const [option, setOption] = useState(null);
  const [bg, setBg] = useState("white");

  useEffect(() => {
    if (option === 3) {
      // Handle global random option
      const randomOption = Math.floor(Math.random() * 2) + 1;
      setOption(randomOption);
    } else if (option === 2) {
      // Random RGB color
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setBg(`rgb(${r}, ${g}, ${b})`);
    } else if (option === 1) {
      // Random Hex color
      const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
      setBg(randomHex);
    }
  }, [option]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6">
          <div className="flex justify-between p-4 bg-gray-100">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setOption(1)}
            >
              Random Hex
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={() => setOption(2)}
            >
              Random RGB
            </button>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setOption(3)}
            >
              Global Random
            </button>
          </div>
          <div 
            style={{ backgroundColor: bg }}
            className="py-16 flex items-center justify-center"
          >
            Hello World it s {bg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
