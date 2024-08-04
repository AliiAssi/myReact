import React, { createContext, useState } from 'react';

// Create a context with default values
export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [state, setState] = useState({
    searchTerm: "pizza", // Default value
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
