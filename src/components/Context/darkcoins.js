import React, { createContext, useContext, useState } from 'react';

const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(0);

  const updateCoins = (amount) => {
    setCoins(coins + amount);
  };

  return (
    <CoinsContext.Provider value={{ coins, updateCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => {
  return useContext(CoinsContext);
};
