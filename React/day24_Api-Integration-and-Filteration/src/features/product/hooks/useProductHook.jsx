import { timeoutManager, useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductsByCategory,
  getProductsCategory,
} from "../api/productApi";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(search);
    }, 700);
    return () => clearTimeout(timeOut);
  }, [search]);

  const { data, isPending, error } = useQuery({
    queryKey: ["products", debounce],
    queryFn: () => getProducts(debounce),
  });
  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useAllCategorys = () => {
  return useQuery({
    queryKey: ["AllCategory"],
    queryFn: getProductsCategory,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);
  let { data, isPending, error } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category),
  });
  return {
    data,
    isPending,
    error,
    category,
    setCategory,
  };
};
