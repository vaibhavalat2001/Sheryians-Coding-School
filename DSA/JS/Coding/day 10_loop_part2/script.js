// 09/ 06 /2026

let prompt = require ('prompt-sync')();
// 1. Write a program to find prime number or not. (efficient)
// let n = prompt("Enter a number: ");
// if (n <= 1) console.log(n +" is not a prime number");
// else {
//     let count = 0;
//     for (let i = 2; i <= n/2; i++) {
//         if (n % i == 0) count++;
//     }
//     if (count == 0) console.log(n +" is a prime number:");
//     else    console.log(n + " is not a prime number");
// }


// 2. Write a program to find prime number or not. (More efficient)
// let n = prompt("Enter a number: ");
// if (n <= 1) console.log("1 is not a prime number.");
// else if (n == 2) console.log("2 is a prime number.");
// else if (n % 2 == 0) {
//     console.log(n +" is not a prime number.");
// } else {
//     let isPrime = true;
//     for (let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2) {
//         if (n % i == 0) isPrime = false;
//     }
//     console.log(isPrime? n+" is a prime" : n +" is not a prime.");

// }


// 3. Write a progrm to take two input a and b, and calculate the value a raised to b. 
function calculatePower(a, b) {
    // Write your logic here
    return a**b
}
console.log(calculatePower(5, 2));


// 4. Write a program to factorial of sum is equal to itself.
function factorial(num) {
    let fact = 1;
    for(let i = num; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}


function isStrongNumber(n) {
    // Write your logic here
    let original = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += factorial(digit);
        n = Math.floor(n / 10);
    }
    if (original == sum)    return "Yes";
    else return "No";
}
let same = isStrongNumber(145);
console.log(same);

