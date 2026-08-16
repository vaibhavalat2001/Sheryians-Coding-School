import { useEffect, useState } from "react";
import { getProductsDataApi } from "../api/productApi";

export const useFilter = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProduct = async () => {
    const data = await getProductsDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filterProducts = (filterParams) => {
    const data = productsData.filter((product) => {
      return product.title.toLowerCase().includes(filterParams.toLowerCase());
    });
    setFilteredProducts(data);
  };

  return {
    isLoading,
    filterProducts, 
    filteredProducts,
  }
}