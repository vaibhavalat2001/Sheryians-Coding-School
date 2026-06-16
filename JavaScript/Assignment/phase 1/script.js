// https://app.notion.com/p/JavaScript-Beginner-Practice-Questions-Phase-1-366aa7c5a79e80fea9efd073126dcd75


// -----

// ## Console & Basics 

// 1. Print `"Hello JavaScript"` in the console.
console.log("Hello JavaScript")
// 2. Print your name, age, and city using one `console.log()`.
console.log(`Name: Vaibhav
age: 24
city: Malkinhi`)
// 3. Print a warning message using `console.warn()`.
console.warn("You are in danger.")
// 4. Print an error message using `console.error()`.
console.error("Error came")
// 5. Use `console.table()` to display an array of 5 numbers.
console.table(['1, 2, 3, 4, 5'])
console.table([1, 2, 3, 4, 5]);

// -----


// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
var studentName = "Vaibhav";
// 2. Create a variable `age` and print it.
const age = 24;
// 3. Create two variables and swap their values.
let a = 10;
let b = 20;
[a, b] = [b, a]
console.log(a);
console.log(b);
// 4. Create a constant variable for `PI` and print it.
const PI = 3.14;
console.log(PI);
// 5. Declare a variable without assigning a value and print it.
var address;
console.log(address);
// 6. Create a variable `score` and increase it by 10.
let score = 5;
score += 10;
console.log(score);
// 7. Create three variables for first name, last name, and full name.
let firstName = "Vaibhav", lastName = "Alat", fullName = "Vaibhav Gajanan Alat";
console.log(firstName);
console.log(lastName);
console.log(fullName);

// -----


// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
const name = "Vaibhav";
const myAge = 24;
const student = true;
const city = null;
let bankBalance;
// 2. Check the type of different variables using `typeof`.
const laptop = "Honor";
console.log(typeof laptop);
// 3. Store your mobile number in a variable and check its type.
let mNo = 9067579706;
console.log(typeof mNo);
// 4. Create a variable with value `null` and check its type.
const value = null;
console.log(typeof value);
// 5. Create a bigint number and print it.
const id = 102324534345343434334343n;
console.log(id);

// -----


// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
let num = Number("50");
console.log(num);
// 2. Convert the number `100` into a string.
let num1 = String(100);
console.log(num1);
// 3. Convert `"true"` into a boolean.
let boolean = Boolean("true");
console.log(boolean);
// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
// 1. Create a variable with value `"123abc"` and convert it into a number.
let value1 = Number("123abc");
console.log(value1);
// 2. Use `parseInt()` on `"500px"`.
console.log(parseInt("500px"));

// -----


// ## Operators

// 1. Add two numbers and print the result.
console.log(10 + 20);
// 2. Find the remainder when 25 is divided by 4.
console.log(25%4);
// 3. Find the square of a number using exponent operator.
console.log(6**2);
// 4. Increment a variable using `++`.
let value2 = 10;
console.log(++value2);
console.log(value2++);
console.log(value2);
// 5. Decrement a variable using `--`.
console.log(--value2);
console.log(value2--);
console.log(value2);
// 6. Use `+=` operator to increase a variable by 20.
console.log(value2 += 20);
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
let value3 = 10, value4 = 20;
console.log(value3 > value4);
console.log(value3 < value4);
console.log(value3 >= value4);
console.log(value3 <= value4);
// 8. Check if two values are strictly equal using `===`.
console.log(value3 == value4);
console.log(value3 === value4);
// 9. Compare `"10"` and `10` using both `==` and `===`.
console.log("10" == 10);
console.log("10" === 10);
// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let a1 = true;
let b1 = false;
console.log(a1 && b1);   // false
console.log(a1 || b1);  // true
console.log(a1 != b1);  // true

// -----


// ## Strings

// 1. Create a string and print its length.
console.log("Vaibhav".length);
// 2. Convert a string into uppercase.
console.log("vaibhav".toUpperCase());
// 3. Convert a string into lowercase.
console.log("VAIBHAV".toLowerCase());
// 4. Check if a string includes the word `"JavaScript"`.
console.log("I am JavaScript developer.".includes("JavaScript"));
// 5. Extract the word `"World"` from `"Hello World"`.
console.log("Hello World".slice(6, 11));
// 6. Replace `"apple"` with `"mango"` in a sentence.
let str = "I want apple.";
console.log(str.replace("apple", "banana"));
// 7. Split `"HTML,CSS,JS"` into an array.
console.log("HTML, CSS, JS".split(","));
// 8. Remove extra spaces from a string.
console.log(" I am Vaibhav   ".trim());
// 9. Repeat the word `"Hi"` 5 times.
console.log("Hi ".repeat(5));
// 10. Print the first character of a string.
console.log("Hello, I am vaibhav"[0]);
console.log("Hello, I am vaibhav".charAt(0));
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let myName = "Vaibhav";
let myAge1 = 24;
console.log(`My name is ${myName} and I am ${myAge1} years old.`);

// -----

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
console.log(Math.round(4.7));
// 2. Find the square root of 81.
console.log(Math.sqrt(81));
// 3. Find the maximum number from `10, 20, 5, 99`.
console.log(Math.max(10, 20, 5, 99));
// 4. Generate a random number between 1 and 10.
console.log(Math.floor(Math.random()* 100 + 1));
// 5. Convert `"99.99"` into an integer.
console.log(parseInt(99.99));
// 6. Check whether `25` is an integer or not.
let number = 25
if (Number.isInteger(number)) {
    console.log("It's a integer number");
} else {
    console.log("It's not a integer number");
}
// 7. Use `toFixed(2)` on `3.141592`.
console.log(3.141592.toFixed(2));

// -----


// ## Conditionals

// 1. Check whether a number is positive or negative.
let number1 = 112;
if (number1 > 0) {
    console.log("It's a position number.");
} else {
    console.log("It's a negation number.");
}
// 2. Check whether a number is even or odd.
if (number1 % 2 == 0) {
    console.log("It's a even number");
} else {
    console.log("It's a odd number");
}
// 3. Check whether a person is eligible to vote.
let age1 = 18;
age1 >= 18? console.log("It's eligiable for vote"): console.log("It's not eligible for vote.");
// 4. Find the largest among two numbers.
let num2 = 10, num3 = 33;
if (num2 > num3) {
    console.log(num2 +" is greater than "+ num3);
} else {
    console.log(num3 +" is greater than "+ num2);
}
// 5. Find the largest among three numbers.
let x = 78, y = 94, z = 93;
if (x > y && x > z) {
    console.log(x +" is greater than "+ y +" and "+ z);
}
else if (y > x && y > z) {
    console.log(y +" is greater than "+ x +" and "+ z);
}
else {
    console.log(z +" is greater than "+ x +" and "+ y);
}
// 6. Check whether a year is a leap year.
let year = 2000;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
// 7. Check whether a number is divisible by both 3 and 5.
let number2 = 15;
if (number2 % 3 == 0 && number2 % 5 == 0) {
    console.log(number2 +" it's divisiable by both 3 and 5")
} else {
    console.log(number2 +" it's not divisiable by both 3 and 5")
}
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
let grade = 91;
if (grade > 90) {
    console.log("Grade -> A");
}
else if (grade > 75) {
    console.log("Grade -> B");
}
else if (grade > 50) {
    console.log("Grade -> C");
} else {
    console.log("Fail");
}
// 1. Check whether a character is a vowel or consonant.
let char = 'a';
char = char.toLowerCase();
if ('aeiou'.includes(char)) { 
    console.log(char +" It's a vowel");
} else {
    console.log(char +" It' a consonent");
}
// 2. Create a calculator using `switch` statement.
let num4 = 20;
let num5 = 10;
let operator = '-';
switch(operator) {
    case '+':
        console.log(num4 + num5);
        break;
    case '-':
        console.log(num4 - num5);
        break;
    case '*':
        console.log(num4 * num5);
        break;
    case '/':
        console.log(num4 / num5);
        break;
    case '%':
        num5 !== 0? console.log(num4 % num5) : console.log(num5 +" It's not divide by "+ num4);
        break;
}
// 3. Print the day name based on a number (1–7).
let day = new Date().getDay();
switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}
// 4. Check whether a username is `"admin"` and password is `"1234"`.
// let userName = prompt("Enter a userName");
// let password = Number(prompt("Enter your password"));
// if (userName === "admin") {
//     console.log(userName +" userName is correct");
//     if (password === 1234) {
//         console.log(password +" password is correct.");
//     } else {
//         console.log(password +(" password is not correct"));
//     }
// } else {
//     console.log(userName +" username is not correct");
// }

// ---


// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
let str1 = "";
if (!str1) {
    console.log("String is empty.")
} else {
    console.log("String is not empty.");
}
// 2. Check whether `0` is truthy or falsy.
let num6 = 0;
if (num6) {
    console.log("It's a truthy value.");
} else {
    console.log("It's a falsy value.");
}
// 3. Check whether `[]` is truthy or falsy.
let arr = [];
if (arr) {
    console.log("It's a truthy value");
} else {
    console.log("It's a falsy value");
}
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
let variable;
if (variable) {
    console.log("Valid");
} else {
    console.log("Invalid");
}
// ---


// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

// ---


// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.

// ---


// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// 2. Check whether a number lies between 10 and 50.
// 3. Check whether a password length is greater than 8.
// 4. Check if a person can drive:
// - age > 18
// - has license = true
// 1. Check whether a number is divisible by 2, 3, or both.
// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// 3. Find whether a number is a multiple of 10.
// 4. Create a simple discount calculator.
// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.

// ---


// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// 2. Reverse a 3-letter string manually.
// 3. Find the last character of a string.
// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// 6. Create a simple login validation system.
// 7. Find whether a number is a 2-digit or 3-digit number.
// 8. Create a mini ATM balance checker.
// 9. Simulate a traffic light system using `switch`.
// 10. Build a small marksheet generator using variables and conditionals.

