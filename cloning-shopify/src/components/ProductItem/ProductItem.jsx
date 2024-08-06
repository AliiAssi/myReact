import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function ProductItem({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative">
      <Link 
        to={`/${product.id}`} 
        className="absolute top-2 left-2 text-blue-500 hover:text-blue-600"
        aria-label="View details"
      >
        <FaEye size={25} />
      </Link>   
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-32 object-cover rounded-md mb-4" 
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{product.title}</h3>
    </div>
  );
}

export default ProductItem;
