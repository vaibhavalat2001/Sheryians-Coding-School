// 13/ JUN /2026


let prompt = require("prompt-sync")();
// 1. Write a program to take input and check it's a strong number or not.
let n = Number(prompt("Enter a number: "));
let copy = n;
let fact = 0;
while (n > 0) {
    let num = n % 10;
    for (let i = 1; i < num; i++) {
        fact += num * i;
    }
    n = Math.floor(n / 10);
}
console.log(fact);
if (fact === copy)  console.log("Strong number");
else    console.log("Not strong number.");