import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../context/slices/cartSlice';
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Checkout from '../components/Checkout/Checkout';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
        >
          <FaTrashAlt size={20} className="mr-2" />
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaShoppingCart size={50} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex justify-between items-center mb-4 p-4 border-b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <img
                  src={`https://via.placeholder.com/150?text=${item.title}`} // Placeholder image
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                >
                  <FaMinus size={16} />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  min="1"
                  className="w-16 mx-2 px-2 py-1 border border-gray-300 rounded-md text-center"
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                >
                  <FaPlus size={16} />
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-4 flex items-center"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </motion.div>
          ))}
          <button
            onClick={toggleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center mt-4"
          >
            <FaShoppingBag size={20} className="mr-2" />
            Proceed to Checkout
          </button>
        </div>
      )}

      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Checkout />
            <button
              onClick={toggleCheckout}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTrashAlt size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Cart;
