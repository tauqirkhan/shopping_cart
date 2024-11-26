import { createContext, useState } from "react";

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [checkoutArray, setCheckoutArray] = useState([
    { id: 5, quantity: 1, price: 695 },
    { id: 7, quantity: 1, price: 9.99 },
  ]);

  return (
    <SharedStateContext.Provider value={{ checkoutArray, setCheckoutArray }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export default SharedStateContext;
