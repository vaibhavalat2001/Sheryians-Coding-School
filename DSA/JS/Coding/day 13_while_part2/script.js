// 11/ Jun /2026

let prompt = require('prompt-sync')();

// 1. Write a program to take 10 digit input and find is number ISBN number or not. 
// let n = prompt("Enter a number: ");
// let num = Number(n.split("-").join(""));
// let ori = num;
// let count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// if (count !== 10) console.log("Invalid ISBN");
// else {
//     let sum = 0;
//     while (ori > 0) {
//         sum += count * (ori % 10);
//         ori = Math.floor(ori / 10);
//         count--;
//     }
//     console.log(sum % 11 === 0 ? "Valied ISBN" : "Invalid ISBN");
// }


// 2. Write a program to take input as a integer and squre of it's last digit is equal to the number it self.
let n = Number(prompt("Enter a number: "));
let num = n;
let squre = n*n;
let count = 1
while (n > 0) {
    count*=10;
    n = Math.floor(n / 10);
}

while (squre > 0) {
    squre = squre % count;
    break;
}

console.log(num === squre? "Number is an Automorphic." : "Number is not an Automorphic.");