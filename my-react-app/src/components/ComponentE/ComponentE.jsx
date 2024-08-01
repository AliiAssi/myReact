import React, { useContext } from 'react';
import { UserContext } from '../ComponentA/ComponentA';
//that is the consumer of the user context
function ComponentE() {
  const user = useContext(UserContext);
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <h5 className="text-sm font-semibold text-gray-700">Component E</h5>
      <p className="text-gray-600">This is Component E, the leaf component in the hierarchy.</p>
      <div style={{ color : "red", backgroundColor : "black" }}>
        {`hello ${user.userName} your age = ${user.age}`}
      </div>
    </div>
  );
}

export default ComponentE;
