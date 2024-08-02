import React from 'react';

function RandomTab() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Random Tab</h2>
      <p className="text-lg text-gray-700">
        This is the content of the Random Tab. You can place any content here, such as text, images, or other components.
      </p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default RandomTab;
