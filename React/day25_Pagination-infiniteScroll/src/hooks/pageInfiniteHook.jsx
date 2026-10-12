import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getInfiniteProducts } from "../api/productApi";

export const useInfinitePage = () => {
    const limit = 20;
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getInfiniteProducts(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = allPage.length * limit;
      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });

  return {
    data,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    error,
  };
};
