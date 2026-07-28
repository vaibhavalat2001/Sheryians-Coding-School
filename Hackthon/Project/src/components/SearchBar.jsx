import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText("");
  };

  return (
    <div className="bg-gray-900 px-16 max-sm:px-10 py-4">
      <form onSubmit={(e) => handleSubmit(e)} className=" flex gap-6">
        <input
          onChange={(e) => setText(e.target.value)}
          required
          value={text}
          className="w-full border border-white outline-none rounded px-3 py-2"
          type="text"
          placeholder="Search anything..."
        />
        <button className="text-xl py-2 px-3 border active:scale-90 border-white rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
