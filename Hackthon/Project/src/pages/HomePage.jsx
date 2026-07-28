import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { store } from "../redux/store";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="mt-18 flex min-h-[90vh] flex-col justify-between">
      <div>
        <SearchBar />
        {query !== "" ? (
          <div>
            <Tabs />
            <ResultGrid />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={`${query !== ""? "hidden": ""} flex justify-center sm:text-xl`}>
        <h2>Search anything in the search box</h2>
      </div>

      <div className="flex justify-center">
        <a
          className="text-blue-500 focus:text-orange-400 visited:text-red-600"
          href="https://www.linkedin.com/in/vaibhav-gajanan-alat/"
          target="_blank"
        >
          By, Vaibhav Gajanan Alat
        </a>
      </div>
    </div>
  );
};

export default HomePage;
