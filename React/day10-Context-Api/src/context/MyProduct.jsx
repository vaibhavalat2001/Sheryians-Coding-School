import { createContext, useState } from "react";

// create context
export const MyProduct = createContext();

// create context provider to store data
export const MyProductContextProvider = ({ children }) => {
  let [page, setPage] = useState("productPage");
  let [cartItem, setCartItem] = useState([]);

  return <MyProduct.Provider value={{page, setPage, cartItem, setCartItem}}>{children}</MyProduct.Provider>;
};
