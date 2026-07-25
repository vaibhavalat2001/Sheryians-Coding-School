import React, { useState } from "react";

const App = () => {
  console.log("rerendering...");
  const [count, setCount] = useState(0);
  // const [user, setUser] = useState("Vaibhav");
  const [user, setUser] = useState({
    name: "Vaibhav"
  });

  return (
    <div className="h-screen bg-black text-white">
      <h1>Hello</h1>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>User - {user.name}</h1>
      <button onClick={() => user.name = "Akshay"}>Change Name</button>
    </div>
  );
};

export default App;
