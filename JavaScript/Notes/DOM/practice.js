let h1 = document.querySelector("h1");
let data = h1.textContent;
h1.textContent = "hello";
console.log(data);

let p = document.createElement("p");
p.textContent = "Hello world";
h1.appendChild(p);