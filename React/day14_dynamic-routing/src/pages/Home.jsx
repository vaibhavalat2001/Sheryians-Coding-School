import React, { useContext } from "react";
import ProductsApi from "../api/ProductsApi";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { productsData } = useContext(MyStore);
  return (
    <div>
      <ProductsApi />
      <div className="grid p-6 gap-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
        {productsData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default Home;
