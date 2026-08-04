import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { MyStore } from "./context/MyContext.jsx";

const App = () => {
 
const {data, setData, page, cartItem} = useContext(MyStore)

  const getProductData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="bg-black p-4 min-h-screen text-white">
      <Navbar />

      {page === "productPage" && (
        <div className="grid p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-8 place-items-center">
          {data.map((elem) => {
            let isInCart = cartItem.find((val) => val.id === elem.id);
            return <ProductCard key={elem.id} product={elem} isInCart={isInCart}/>
          }
          )}
        </div>
      )}

      {page === "cartPage" && <Cart/>}
    </div>
  );
};

export default App;
