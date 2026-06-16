// 08/ 06 /2026

let prompt = require('prompt-sync')();
// let n = prompt("Enter a number: ");
// 1. Print the natural number 1 to n.
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// };


// 2. Print the natural number n to 1. 
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// };


// 3. Take a input and print the table.
// for (let i = 1; i <= 10; i++) {
//     console.log(n +" * "+ i +" = "+ n * i);
// }


// 4. Sum up to n term.
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log("sum = "+sum);


// 5. Write a progrm to find Factorial of a n number.
// if (n <= 1)     console.log("Factorial of "+ n +" is: 1");
// else {
//     let fact = 1;
//     for (let i = n; i >= 1; i--) {
//         fact *= i;
//     }
//     console.log("Factoral of "+ n +" is: "+ fact);
// }


// 6. Print a some of all even and odd number in a range separately. 
// let start = Number(prompt("Enter a first number: "));
// let end = Number(prompt("Enter a second number: "));
// if (start > end) {
//     [start, end] = [end, start];
// }
// let even = 0, odd = 0;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) even += i;
//     else    odd += i;
// }
// console.log("Even Sum: "+ even +" Odd Sum: "+ odd); 


// 7. Print all factors of a number. 
let num = Number(prompt("Enter a number: "));
if (num >= 1) {
    for(let i = 1; i <= num/2; i++) {
        if (num % i == 0) {
            process.stdout.write(i +" ");
        }
    }
    console.log(num);
}


// 8. Check if the number is prime or not. 
// let num = Number(prompt("Enter a number: "));
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) count++;
// }
// if (count == 2) console.log(num +" is a prime number.");
// else    console.log(num +" is not a prime number");


// 9. 