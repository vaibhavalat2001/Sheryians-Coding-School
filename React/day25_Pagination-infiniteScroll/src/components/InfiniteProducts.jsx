import React from "react";
import { useInfinitePage } from "../hooks/pageInfiniteHook";
import ProductCard from "./ProductCard";

const InfiniteProducts = () => {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePage();

  if (isPending) return <h1>loading...</h1>;
  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

  return (
    <div className="flex p-5 flex-col gap-6 items-center">
        <h1 className="font-bold md:text-3xl text-xl">Other Products</h1>
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading.." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default InfiniteProducts;
