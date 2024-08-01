import React from 'react';
import ComponentD from '../ComponentD/ComponentD';

function ComponentC() {
  return (
    <div className="p-4 bg-green-100 border border-green-300 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-green-800 mb-4">Component C</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
