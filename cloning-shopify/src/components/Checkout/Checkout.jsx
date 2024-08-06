import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../context/slices/cartSlice';
import { FaCreditCard, FaShoppingCart, FaCheckCircle } from 'react-icons/fa';

function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleConfirmPurchase = () => {
    // Implement purchase logic here
    alert('Purchase confirmed!');
    dispatch(clearCart()); // Clear cart after purchase
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaShoppingCart size={50} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <ul className="list-none p-0">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-600">{item.quantity} x ${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center mb-4 border-t pt-2">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl font-semibold">${calculateTotal()}</span>
          </div>
          <button
            onClick={handleConfirmPurchase}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
          >
            <FaCheckCircle size={20} className="mr-2" />
            Confirm Purchase
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
