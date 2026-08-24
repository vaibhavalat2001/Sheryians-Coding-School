import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./apps/Store";
import { decrement, increment } from "./features/CountSlice";
import About from "./pages/About";

const App = () => {
  const dispatch = useDispatch();
  let { count } = useSelector((store) => store.count);
  console.log("hello");
  return (
    <div className="p-4  flex flex-col justify-center items-center gap-5 text-2xl h-screen bg-black text-white">
      Redux Toolkit:
      <h1>Count: {count}</h1>
      <div className="flex gap-5">
        <button
          className="bg-red-500 rounded-xl px-2 py-1"
          onClick={() => dispatch(increment("argument"))}
        >
          Increment
        </button>
        <button
          className="bg-red-500 rounded-xl px-2 py-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <About />
    </div>
  );
};

export default App;
