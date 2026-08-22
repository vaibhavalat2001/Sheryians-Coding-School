import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "./api/productApi";

const Infinite = () => {
  const limit = 10;
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
        console.log(lastPage)
        // console.log(allPage)
    }

  });
  return <div className="h-screen bg-black text-white">infinite</div>;
};

export default Infinite;
