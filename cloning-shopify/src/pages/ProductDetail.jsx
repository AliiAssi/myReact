import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import { FaCartPlus, FaShareAlt, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItem } from '../context/slices/cartSlice'; // Adjust the import path as needed
import {useNavigate} from 'react-router-dom';
function ProductDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useCustomFetch(`https://dummyjson.com/products/${id}`, {});
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const navigator = useNavigate();

  if (isLoading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  const product = data;

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product?.id,
      title: product?.title,
      quantity,
      price: product?.price
    }));
    navigator('/');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start">
        <img 
          src={product?.thumbnail} 
          alt={product?.title} 
          className="w-full lg:w-1/2 h-64 object-cover rounded-md mb-4 lg:mb-0" 
        />
        <div className="lg:ml-6 flex-1">
          <h1 className="text-3xl font-semibold mb-2">{product?.title}</h1>
          <p className="text-gray-600 mb-4">{product?.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ${product?.price}</p>
          <div className="flex items-center mb-4">
            <FaStar size={20} className="text-yellow-500" />
            <span className="ml-2 text-gray-600">{product?.rating} / 5</span>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center mr-4"
            />
            <button 
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
            >
              <FaCartPlus size={20} className="mr-2" />
              Add to Cart
            </button>
          </div>
          <button 
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center"
          >
            <FaShareAlt size={20} className="mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
