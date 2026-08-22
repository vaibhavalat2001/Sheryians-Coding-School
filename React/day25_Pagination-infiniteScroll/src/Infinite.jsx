import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  const limit = 40;
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = allPage.length * limit;
      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });

  if (isPending) return "Loading...";
  let allProducts = data.pages.flatMap((val) => val.products);
  console.log(allProducts);
  return (
    <div className="min-h-screen bg-black flex flex-col gap-6 p-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button
          className="active:scale-90 text-white"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
