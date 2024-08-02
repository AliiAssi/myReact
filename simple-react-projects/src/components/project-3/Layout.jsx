import React, { useState } from "react";
import Star from "./Star";

// Helper function to generate an array of numbers
const range = (n) => Array.from({ length: n }, (_, i) => i);

function Layout() {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-black shadow-md rounded-lg">
        <div className="p-6 flex space-x-2">
          {range(5).map((index) => (
            <Star
              key={index}
              size={25}
              selected={selected}
              setSelected={setSelected}
              onIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
