// 11/ Jun /2026


// 1. Sum of digits.
// function sum(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     console.log(sum);
// }
// sum(1234);


// 2. reverse the number.
let num = 985;
let reverse = 0;
while (num > 0) {
    
    reverse = (reverse * 10) + (num % 10);
    num = Math.floor(num / 10);
}
console.log(reverse);



// 3. Write a program to take input as a integer and compute the sum of its digits.
// function sumOfDigits(n) {
//     // Write your logic here
//     let arr = [];
//     while (n > 0) {
//         arr.unshift(n % 10);
//         n = Math.floor(n / 10); 
//     }
//     let sum = 0;
//     for(let num of arr) {
//         sum += num;
//     }
//     return sum;

    
// }
// let result = sumOfDigits(1234);
// console.log(result);



// 4. Write a program to take input as a integer. a number is a automorphic number if it is squre ends with number itself.
// function isAutomorphic(n) {
//     // Write your logic here
//     let num = n.toString();
//     let squre = num ** 2;
//     let digit = "";
//     for(let i = 1; i <= num.length; i++) {
//         digit += squre % 10;
//         squre = Math.floor(squre / 10);
//     }
//     let morphic = Number(digit.split("").reverse().join(""));
//     if (n === morphic) return "Yes";
//     else return "No";
// }

// let result = isAutomorphic(25);
// console.log(result);
