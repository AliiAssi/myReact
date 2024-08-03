import React, { useState } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  // Handler to toggle the state when an outside click is detected
  const handleOutsideClick = () => {
      setIsOpen(false);
  };

  const { ref } = useOutsideClick(handleOutsideClick);  
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
          {isOpen ? (
            <div ref={ref}>
              <h2 className="font-bold text-xl mb-2">Project Content</h2>
            </div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setIsOpen(true)}
            >
              Show Content
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
