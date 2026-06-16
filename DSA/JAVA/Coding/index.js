let a = 5;
let b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

let p = 1000;
let t = 3;
let r = 5;

let ci = (1000 * Math.pow((1 + 5/100), 3) - 1000).toFixed(2);
console.log(ci);


let s1 = 5, s2 = 7, s3 = 9;
let s = (s1 + s2 + s3) / 2;

let area = Math.sqrt(s*(s-s1) * (s-s2) * (s-s3)).toFixed(3);
console.log(area);