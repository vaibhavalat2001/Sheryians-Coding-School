// React Zero: Create React Project using Vite
import React from "react";
console.log("Hello, Vaibhav");

console.log(React);

let realDom = document.querySelector("#root");

let vdom = React.createElement("h1", {}, "Hello, I am virtual DOM");
let root = ReactDOM.createRoot(realDom);
root.render(vdom);


