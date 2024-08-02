import React, { createContext, useState } from "react";
import PopUp from "./PopUp";

// Create a context with default values
export const ContentContext = createContext();

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("Hello World!");

  // Function to update content
  const updateContent = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            aria-label="Toggle alert visibility"
          >
            {isOpen ? "Hide Alert" : "Show Alert"}
          </button>
          {isOpen && (
            <ContentContext.Provider value={{ content, updateContent }}>
              <PopUp />
            </ContentContext.Provider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
