// Cell.js
import React from 'react';

function Cell({ value, onClick }) {
  return (
    <div
      className={`flex items-center justify-center border border-gray-300 text-2xl font-bold cursor-pointer hover:bg-gray-200 ${
        value === 'X' ? 'text-blue-500' : value === 'O' ? 'text-red-500' : 'bg-white'
      }`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Cell;
