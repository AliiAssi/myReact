import React from 'react';

const EffectsDemo = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Shadow Effects */}
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">Shadow Effects</h2>
        <p className="text-gray-700">
          This box has a large shadow.
        </p>
      </div>
      
      {/* Opacity */}
      <div className="p-6 bg-blue-500 text-white opacity-50 rounded-lg">
        <h2 className="text-xl font-bold">Opacity</h2>
        <p>
          This box has 75% opacity.
        </p>
      </div>
      
      {/* Transitions and Animations */}
      <div className="transition-transform duration-300 transform hover:scale-105 p-6 bg-green-500 text-white rounded-lg">
        <h2 className="text-xl font-bold">Transitions</h2>
        <p>
          Hover over me to scale up.
        </p>
      </div>
      <div className="animate-spin h-10 w-10 border-t-4 border-red-500 rounded-full">
        {/* Spinner */}
      </div>
      
      {/* Transforms */}
      <div className="transform rotate-45 scale-110 bg-purple-500 text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">Transforms</h2>
        <p>
          Rotated and scaled box.
        </p>
      </div>
      
      {/* Hover and Focus States */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <h2 className="text-xl font-bold">Hover and Focus States</h2>
        <p>
          Hover and focus on me.
        </p>
      </button>
      
      {/* Filters */}
      <img src="https://via.placeholder.com/150" className="filter blur-sm" alt="Placeholder" />
      <div className="filter brightness-150 p-6 bg-yellow-500 text-white rounded-lg">
        <h2 className="text-xl font-bold">Filters</h2>
        <p>
          This box has increased brightness.
        </p>
      </div>
      
      {/* Background Effects */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">Background Effects</h2>
        <p>
          Gradient background.
        </p>
      </div>
    </div>
  );
};

export default EffectsDemo;
