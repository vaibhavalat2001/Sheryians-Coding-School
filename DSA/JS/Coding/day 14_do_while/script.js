// 11/ JUN / 2026

let prompt = require('prompt-sync')();

// 1. Write a program to print hello world. 
// Do While Loop
// let n;
// do {
//     console.log("Hello world.");
//     n = prompt("Enter a number: ");
// } while(n == 1)


// 2. Write a program to guess the number. 
// let computer = Math.floor(Math.random() * 100 + 1);
// let user, attempt = 0;

// do {
//     user = Number(prompt("Enter a number: "));
//     attempt++;
//     if (user > computer) console.log("Number too large:");
//     else if (user < computer) console.log("Number too small:");
//     else if (user === computer) console.log("🎊Congratulation🎉, you guessed exact number in " + attempt + " attempt.");
//     else console.log("Invalid number");
// } while (user !== computer);


// 3. Write a Sasta Calculator program.
console.log("Enter 1 for Addition:");
console.log("Enter 2 for Subtraction:");
console.log("Enter 3 for Multiplication");
console.log("Enter 4 for Division");
let n;
do {
    n = Number(prompt("Enter a number: "));
    switch (n) {
        case 1: {
            let a = Number(prompt("Enter a 1st number: "));
            let b = Number(prompt("Enter a 2nd number: "));
            console.log("The sum is: " + (a + b));
            break;
        }
        case 2: {    
            let a = Number(prompt("Enter a 1st number: "));
            let b = Number(prompt("Enter a 2nd number: "));
            console.log("The subtraction is: " + (a - b));
            break;
        }
        case 3: {
            let a = Number(prompt("Enter a 1st number: "));
            let b = Number(prompt("Enter a 2nd number: "));
            console.log("The multiplication is: " + (a * b));
            break;
        }
        case 4: {    
            let a = Number(prompt("Enter a 1st number: "));
            let b = Number(prompt("Enter a 2nd number: "));
            console.log(b !== 0? "The quotient is: " + (a / b) : "Can't divide by 0");
            break;
        }

        default: 
            console.log("Invalid number.");
        }
    n = Number(prompt("Enter 10 if recontinue: "))
} while (n == 10);