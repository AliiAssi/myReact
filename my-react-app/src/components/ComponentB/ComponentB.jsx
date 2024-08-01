import React from 'react';
import ComponentC from '../ComponentC/ComponentC';

function ComponentB() {
  return (
    <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Component B</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
