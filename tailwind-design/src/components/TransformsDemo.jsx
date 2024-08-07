import React from 'react';

const TransformsDemo = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Translate Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Translate Example</h2>
        <div className="bg-blue-500 text-white p-6 rounded-lg transform translate-x-10 translate-y-10">
          <p>This box is translated 10 units to the right and 10 units down.</p>
        </div>
      </div>

      {/* Scale Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Scale Example</h2>
        <div className="bg-green-500 text-white p-6 rounded-lg transform scale-110 hover:scale-125 transition-transform duration-300 ease-in-out">
          <p>This box scales up by 10% normally and 25% on hover.</p>
        </div>
      </div>

      {/* Rotate Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Rotate Example</h2>
        <div className="bg-red-500 text-white h-32 w-32 rounded-full flex items-center justify-center transform rotate-45">
          <p>Rotated 45 degrees.</p>
        </div>
      </div>

      {/* Skew Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Skew Example</h2>
        <div className="bg-yellow-500 text-white p-6 rounded-lg transform skew-x-12 skew-y-6">
          <p>This box is skewed 12 degrees on the X-axis and 6 degrees on the Y-axis.</p>
        </div>
      </div>
    </div>
  );
};

export default TransformsDemo;
