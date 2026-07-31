// React Zero: Create React Element

let rootDiv = document.querySelector("#root");

let h1 = document.createElement("h1");
h1.textContent = "Hello, Vaibhav";
rootDiv.append(h1);

let reactEle = React.createElement("span", {className: "hello", "data-id": "1"}, "Hello, Alat Vaibhav Gajanan");
let root = ReactDOM.createRoot(rootDiv);
root.render(reactEle);

import {a, sum} from './main.js'
console.log(a);

let res = sum(10, 30);
console.log(res);

console.log(React);