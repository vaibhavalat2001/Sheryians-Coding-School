import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Vaibhav", id: 2001 })

  const calculation = useMemo(() => {
    console.log("Calculation running...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [])

  const greet = useCallback(() => {
    console.log("Good Morning.");
  }, []);

  return (
    <div className="p-8 text-2xl flex flex-col gap-4 text-white h-screen bg-black">
      App
      <h1>Count {count}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Calculation: {calculation}</h1>
      <button onClick={() => setCount(count + 1)} className="rounded-xl bg-red-500 p-4">Increment</button>
      <button onClick={() => setUser({...user, name: "Vinayak"})} className="bg-orange-500 p-4 ml-4 rounded-2xl">Change Name</button>
      {/* <Home greet={greet} />
      <About greet={greet} /> */}
    </div>
  );
};

export default App;
