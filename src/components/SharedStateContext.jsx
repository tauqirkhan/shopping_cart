import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [checkoutArray, setCheckoutArray] = useState([
    {
      id: 5,
      quantity: 1,
      price: 695,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
    {
      id: 7,
      quantity: 1,
      price: 9.99,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      name: "White Gold Plated Princess",
    },
  ]);

  return (
    <SharedStateContext.Provider value={{ checkoutArray, setCheckoutArray }}>
      {children}
    </SharedStateContext.Provider>
  );
};

SharedStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedStateContext;
