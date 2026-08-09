import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";

const ProductsApi = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Api error:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return <div></div>;
};

export default ProductsApi;
