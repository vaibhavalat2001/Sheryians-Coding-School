// 07 / Jun / 26 

// let prompt = require('prompt-sync')();
// // for loop (Entry control loop)
// let num = Number(prompt("Enter a number: "));
// for (let i = 1; i <= num; i++) {
//     console.log("Hello world");
// }


// infinite loop use 2 semi-color(;;) 
// for(;;) {
//     console.log("hello world");
// }


// Assignments

// 1. Print the natural numbers N to 1 using for loop.
// function printNumbers(n) {
//     //Write your code here
//     // let num = [];
//     for (let i = n; i > 0; i--) {
//          process.stdout.write(i + " ");
//     }
//     // return num;
// }
// let reverse = printNumbers(5);


// 2. Print the natural numbers from 1 to N using for loop. 
// class Solution {
//     printNumbers(n) {
//         // Write your code here
//         let num = [];
//         for (let i = 1; i <= n; i++) {
//             num.push(i);
//         }
// // return array of the factors
//     return num;
//     }
// }

// let solution = new Solution;
// let num = solution.printNumbers(5);
// console.log(num);


// 3. write a program to accept integer n and calculate the sum on first n natural number.
/*
 * Recursive function to calculate sum up to N
 * @param {number} n
 * @returns {number}
//  */
// function sumUpToN(n) {
//     // Write your logic here
//     let num = 0;
//     for (let i = 0; i <= n; i++) {
//         num += i;
//     }
//     return num;
// }
// let sum = sumUpToN(5);
// console.log(sum);


// 4. Write a program to accept integer n and calculate the factorial. 
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }

// }
// let fact = factorial(5);
// console.log(fact);

// function factorial(n) {
//     if (n <= 1) {
//         console.log(1);
//     } else {
//         let fact = 1;
//         for (let i = n; i > 0; i--) {
//             fact *= i;
//         }
//         console.log(fact);
//     }
// }
// factorial(5);


// 5. Write a program accept integer n as a input and print all factor of n.
// function printFactors(n) {
//     // Write your logic here
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             let fact = i + " ";
//             process.stdout.write(fact);
//         }
//     }
// }
// printFactors(5);


// 6. Write a program to accept two integer start and end and calculate.
//    1. The sum of all even number withing range [start end].
//    2. The sum of all odd number withing range [start end].
// function sumEvenOddInRange(start, end) {
//     // Write your logic here
//     let st = start;
//     let ed = end;
//     if (st > ed) {
//         [st, ed] = [ed, st]
//     }
//     let even = 0;
//     let odd = 0;

//     for (let i = st; i <= ed; i++) {
//         if (i % 2 == 0) {
//             even += i;
//         } else {
//             odd += i;
//         }
//     }
//     console.log(even);
//     console.log(odd);
// }
// sumEvenOddInRange(1, 5);


function sumEvenOddInRange(start, end) {
    // Write your logic here
    let st = start;
    let ed = end;
    if (st > ed) {
        [st, ed] = [ed, st]
    }
    let even = 0;
    let odd = 0;

    for (let i = st; i <= ed; i++) {
        if (i % 2 == 0) {
            even += i;
        } else {
            odd += i;
        }
            
    }
    return [even, odd];

}
let [even, odd] = sumEvenOddInRange(1, 5);
console.log(even);
console.log(odd);