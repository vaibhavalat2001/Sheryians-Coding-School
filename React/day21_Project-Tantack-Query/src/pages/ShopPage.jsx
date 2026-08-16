import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { getProductsDataApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";
import { useProductApi } from "../hooks/ProductHook";
import Filters from "../components/Filters";
import { useFilter } from "../hooks/filterHook";

const ShopPage = () => {
  // const {filteredProducts, filterProducts, isLoading
  // } = useFilter();

  const {isPending, data, error} = useProductApi()
  if (error) return <h1>{error.message}</h1>

  return (
    <div className="flex flex-col gap-5">
      <Filters />
      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid px-4 grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 place-items-center gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
