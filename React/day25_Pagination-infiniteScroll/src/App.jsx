import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const limit = 20;
  const getProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.log("Product api error: ", error);
    }
  };

  let totalPage = Math.ceil(products?.total / limit);

  useEffect(() => {
    getProducts();
  }, [page]);
  return (
    <div className="flex bg-black flex-col p-6 gap-10 items-center">
      <div className="w-full grid grid-cols-1   gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {products?.products.map((val) => (
          <ProductCart key={val.id} product={val} />
        ))}
      </div>
      <div className="flex items-center text-lg gap-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-red-500 rounded-xl px-4 py-1 cursor-pointer active:scale-90"
        >
          Prev
        </button>
        <span className="text-white">
          page {page + 1} of {totalPage}
        </span>
        <button
          disabled={page >= totalPage - 1}
          onClick={() => setPage(page + 1)}
          className="bg-red-500 rounded-xl px-4 py-1 cursor-pointer active:scale-90"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
