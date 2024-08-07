import React from 'react';

const FilterEffectsDemo = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Blur Effect */}
      <div className="p-6 bg-gray-300 text-gray-700 filter blur-md">
        <h2 className="text-xl font-bold">Blur Effect</h2>
        <p>
          This box has a medium blur effect applied.
        </p>
      </div>

      {/* Brightness Effect */}
      <div className="p-6 bg-blue-500 text-white filter brightness-75 rounded-lg">
        <h2 className="text-xl font-bold">Brightness Effect</h2>
        <p>
          This box has 75% brightness applied.
        </p>
      </div>

      {/* Grayscale Effect */}
      <div className="p-6 bg-red-500 text-white filter grayscale rounded-lg">
        <h2 className="text-xl font-bold">Grayscale Effect</h2>
        <p>
          This box is converted to grayscale.
        </p>
      </div>

      {/* Hue Rotation Effect */}
      <div className="p-6 bg-green-500 text-white filter hue-rotate-90 rounded-lg">
        <h2 className="text-xl font-bold">Hue Rotation Effect</h2>
        <p>
          This box has a 90-degree hue rotation applied.
        </p>
      </div>

      {/* Invert Effect */}
      <div className="p-6 bg-yellow-500 text-black filter invert rounded-lg">
        <h2 className="text-xl font-bold">Invert Effect</h2>
        <p>
          This box has color inversion applied.
        </p>
      </div>

      {/* Saturate Effect */}
      <div className="p-6 bg-purple-500 text-white filter saturate-150 rounded-lg">
        <h2 className="text-xl font-bold">Saturate Effect</h2>
        <p>
          This box has 150% saturation applied.
        </p>
      </div>

      {/* Sepia Effect */}
      <div className="p-6 bg-teal-500 text-white filter sepia rounded-lg">
        <h2 className="text-xl font-bold">Sepia Effect</h2>
        <p>
          This box has a sepia tone applied.
        </p>
      </div>
    </div>
  );
};

export default FilterEffectsDemo;
