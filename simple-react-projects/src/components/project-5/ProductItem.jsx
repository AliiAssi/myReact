import React from 'react';

function ProductItem({ title, image, price, description }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-xl font-bold text-gray-800 mb-4">${price}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
