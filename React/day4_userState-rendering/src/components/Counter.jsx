import React, { useState } from "react";

const Counter = () => {
    console.log("Rerendering");
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter is - {count}</h1>
      <button className="border-2 border-red-300 rounded-xl px-2 y-1 bg-green-500"
        onClick={() => {
          // setCount(count + 1); // Batching
          // setCount(count + 1); // Batching
          // setCount(count + 1); // Batching
          setCount((pre) => pre + 1);
          setCount((pre) => pre + 1);
          setCount((pre) => pre + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
