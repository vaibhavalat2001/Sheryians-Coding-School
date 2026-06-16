// ** Math Function:

// console.log(Math.abs(-10)); // negative convert into positive Output: 10
// console.log(Math.floor(10.43)); // lower Output: 10
// console.log(Math.round(10.5));  // round the value Output: 10
// console.log(Math.ceil(10.43)); // upper Output: 11
// console.log(Math.trunc(13.245621));  // remove decimal digit Output: 13
// console.log(Math.pow(10, 3));   // power Output: 1000
// console.log(Math.random()); // create random value Output: 0 to 0.999
// console.log(Math.max(34, 23, 86, 96, 0));   // extract max value: Output: 96
// console.log(Math.min(13, 62, 0, 223, 32));  // extract min value: Output: 0

// let a = 39.7434;
// console.log(a.toFixed(2));
// console.log();


//Q.1 ** Calculate compound Interest:
// CP = P(1 + r/100) ** (t) - p
// input: P = 10000, r = 5, t = 3
// output 1576.25

// let prompt = require("prompt-sync")();
// let P = prompt("Enter a principal: ");
// let r = prompt("Enter a rate of interest: ");
// let t = prompt("Enter a time: ");

// let CI = (P * (1 + r/100) ** (t) - P).toFixed(2);
// console.log(CI);



//Q.2 ** OTP Generation:
// let otp = Math.floor(Math.random()*9000+1000);
// console.log(otp);



//Q.3 ** Area of tringle by heron's formula.
// s(semi parameter) = a+b+c/2
// root of s * (s-a) * (s-b) * (s-c)
let a = 5, b = 6, c = 7;
let s = (5 + 6 + 7) / 2;
let area = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
console.log(area.toFixed(1));


//Q.4 ** Circumference of circle and area of circle.
// Cc = (PI*r)**2
let C = (2 * Math.PI * 10.8).toFixed(2);
let A = (Math.PI * 10.8**2).toFixed(2);
console.log(C);
console.log(A)

