import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Tanstack = () => {
  const [page, setPage] = useState(0);
  const limit = 10;
  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>something wait wrong...</h1>;

  const totalPage = Math.ceil(data.total / limit);

  return (
    <div className="bg-black flex flex-col items-center gap-6 p-6">
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 place-items-center "
      >
        {data.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>

      <div className="flex gap-6 items-center">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-green-500 rounded-lg px-4 py-2 text-white font-semibold active:scale-90 "
        >
          Pre
        </button>
        <span className="text-white">
          page {page + 1} of {totalPage}
        </span>
        <button
          disabled={page >= totalPage - 1}
          onClick={() => setPage(page + 1)}
          className="bg-red-500 rounded-lg px-4 py-2 text-white font-semibold active:scale-90 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tanstack;
