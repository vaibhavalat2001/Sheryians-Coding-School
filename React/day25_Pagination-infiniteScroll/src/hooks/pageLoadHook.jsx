import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../api/productApi";

export const usePageLoad = () => {
  const [page, setPage] = useState(0);
  const limit = 12;
  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  const totalPage = Math.ceil(data?.total / limit);

  return {
    data,
    isPending,
    isPlaceholderData,
    page,
    setPage,
    error,
    totalPage,
  };
};
