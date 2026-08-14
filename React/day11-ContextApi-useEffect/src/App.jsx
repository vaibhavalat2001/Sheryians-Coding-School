import React, { use, useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { ContextProvider, MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  console.log("App Rendering...");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [apiData, setApiData] = useState(null);
  // const {count, setCount} = useContext(MyStore);

  // with dependecy render every depency execution

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setApiData(res.data);
  };

  // empty dependecy render only once
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen  text-2xl gap-5 flex flex-col justify-center items-center">
      <h1>{count}</h1>
      <button
        className="bg-red-500 px-2 py-1 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <div>{toggle}</div>
      {toggle ? <Contact /> : <About />}
      <button
        className="bg-green-500 px-2 py-1 rounded-2xl"
        onClick={() => setToggle((pre) => !pre)}
      >
        Change Toggle
      </button>
      {/* <ContextProvider>
        <Home />
        <About />
      </ContextProvider> */}
    </div>
  );
};

export default App;
