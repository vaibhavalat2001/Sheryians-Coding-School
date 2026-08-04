import React, { useState } from "react";

const App = () => {
  console.log("rerendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Vaibhav",
  });

  return (
    <div className="h-screen p-4 text-2xl flex flex-col items-center gap-14 bg-black text-white">
      <h1>Day 5 - Rendering and Form Handling</h1>
      <div>
        <h1>Count - {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h1>User - {user.name}</h1>
        <button onClick={() => (user.name = "Akshay")}>Change Name</button>
      </div>
    </div>
  );
};

export default App;
