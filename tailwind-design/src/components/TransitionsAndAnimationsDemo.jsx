import React, { useState } from 'react';

const TransitionsAndAnimationsDemo = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-8 space-y-8">
      {/* Transition Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Transition Example</h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Toggle Visibility
        </button>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } bg-gray-200 p-6 rounded-lg`}
        >
          <p>This box fades in and out.</p>
        </div>
      </div>

      {/* Scale & Transform Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Scale & Transform Example</h2>
        <div className="transition-transform duration-500 ease-in-out transform hover:scale-110 bg-green-500 text-white p-6 rounded-lg">
          <p>Hover over this box to scale it up.</p>
        </div>
      </div>

      {/* Rotation Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Rotation Example</h2>
        <div className="animate-spin h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full">
          {/* Spinner */}
        </div>
      </div>

      {/* Pulse Animation Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Pulse Animation Example</h2>
        <div className="animate-pulse bg-red-500 h-16 w-16 rounded-full">
          {/* Pulsing Box */}
        </div>
      </div>
    </div>
  );
};

export default TransitionsAndAnimationsDemo;
