import React, { useContext, useState } from 'react';
import { ContentContext } from './Layout';

function PopUp() {
  const { content, updateContent } = useContext(ContentContext);
  const [newContent, setNewContent] = useState("");

  const handleChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleUpdate = () => {
    updateContent(newContent);
    setNewContent(""); // Clear input after updating
  };

  return (
    <div className="m-5 p-4 mb-4 border rounded-lg shadow-md bg-gray-100 text-gray-800">
      <div className="flex items-center">
        <div className="mr-3">
          <span className="text-xl">🔔</span>
        </div>
        <div>
          <p className="text-sm">{content}</p>
          <div className="mt-4">
            <input
              type="text"
              value={newContent}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md"
              placeholder="Enter new content"
            />
            <button
              onClick={handleUpdate}
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            >
              Update Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
