import React, { createContext, useState } from 'react';
import ComponentB from '../ComponentB/ComponentB';

// that is the provider component of the user context
export const UserContext =  createContext();
function ComponentA() {
  const [user, setUser]  = useState(
    {
      userName : 'Guest',
      age : 23
    }
  );

  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Component A</h1>
        <h2>{`Hello ${user.userName} your age equal ${user.age}`}</h2>
      </div>
      <div>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default ComponentA;
