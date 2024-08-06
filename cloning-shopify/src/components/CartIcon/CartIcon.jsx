import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon({ itemCount }) {
  return (
    <div className="relative inline-block">
      <FaShoppingCart size={24} className="text-white" />
      {itemCount > 0 && (
        <span
          className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full"
          style={{ transform: 'translate(50%, -50%)' }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
