import { useState } from "react";

let App = () =>  {
  // let [count, setCount] = useState(0);
  let [count, setCount] = useState(0);

  return <div>
    <h1>hello</h1>
    <button onClick={() => setCount(count + 1)}>Count - {count}</button>
  </div>
}

export default App;