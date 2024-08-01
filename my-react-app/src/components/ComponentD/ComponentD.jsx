import React from 'react';
import ComponentE from '../ComponentE/ComponentE';

function ComponentD() {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg">
      <h4 className="text-md font-semibold text-yellow-800 mb-4">Component D</h4>
      <ComponentE />
    </div>
  );
}

export default ComponentD;
