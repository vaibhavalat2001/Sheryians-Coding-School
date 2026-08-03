import { useState } from "react";
import something, {one, two} from "./text.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

let App = () =>  {
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);

  // something();  // default export with any name
  // one();  // export function with same name two();
  console.log(flag);

  return <div>
    <h1>Day 3 - Props and useState</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <span style={{margin:"0 20px"}}>{count}</span>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button style={{display:"block"}} onClick={() => setFlag(false)}>Boolean</button>
    <Navbar />
    <Hero name="Vaibhav"/>
    <Footer/>
  </div>
}

export default App;