import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  let throttle = false;
  
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  const filteredData = () => {
    console.log("filtered...");
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  // debouncing
  useEffect(() => {
    if (!searchData) return;
    const timeout = setTimeout(() => {
      filteredData();
    }, 700);
    return () => clearTimeout(timeout);
  }, [searchData]);

  // throttling
  useEffect(() => {
    const handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scrolling...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="bg-black min-h-screen py-4 px-10 flex flex-col gap-6 text-white">
      <h1 className="text-2xl">Deboucing</h1>
      <input
        onChange={(e) => setSearchData(e.target.value)}
        className="border text-xl border-red-500 w-100 py-2 px-6"
        type="text"
        placeholder="search title"
      />
      <div className="flex flex-col gap-3">
        {productsData.map((val) => (
          <h1 key={val.id}>{val.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
