import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("productPage");
  const [cartItem, setCartItem] = useState([]);

  const incQuantity = (id) => {
    setCartItem((pre) => {
      return pre.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decQuantity = (id) => {
    setCartItem((pre) => {
      return pre
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        data,
        setData,
        page,
        setPage,
        cartItem,
        setCartItem,
        incQuantity,
        decQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
