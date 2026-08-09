import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async () => {
    try {
      let res = await axiosInstance("/products?limit=194");
      setProductsData(res.data.products);
      setIsLoading(false);
    } catch (error) {
      console.log("Api error:", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  if (isLoading)
    return (
      <div className="h-full flex justify-center items-center">
        <div className="w-15 h-15 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>
      </div>
    );
  return (
    <div className="py-10 px-6 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-3  min-[850px]:grid-cols-3 min-[640px]:grid-cols-2 gap-6 place-items-center">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
