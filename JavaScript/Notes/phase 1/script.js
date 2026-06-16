// Phase 1 

// 3. ### Your first Program ---
// ```jsx

console.log("Hello World");
console.log(42);
console.log(true);
console.log("My name is", "Vaibhav", "and I am", 25, "years old");

// ---


// 4. ### Comments ---
// This is a single line comment
/* This is a
   multi-line comment
*/

// ---


// 5. ### Variable -- The Heart of Programming ---
var age = 24;
let name = "Vaibhav";
const PI = 3.141559;

// ***
// let x;   // variable declare
// x = 10;  // variable initialization
let x = 10; // variable declarationa nd initialization

// *** 
let city;
console.log(city);
city = "Yavatmal";  // variable initialization
console.log(city);

// ***
const country = "India";
// country = "USA"; // type error
let score = 0;
score += 10;

// ---


// 6. ### Data Types ---
// ***Primitive Data Types
let str = "hello";
let age1 = 24;
let isStudent = true;
let city1;  // undefined - JS gave it
let address = null;     // null - I gave it
let bigNum = 12312323434323n;
let sym = Symbol("id");

// ***Non-Primitive data Types
let arr = [1,2, 3, 4,  5];  // array
let obj = {     // object
    name: "Vaibhav",
    age: 24, 
    city: "Yavatmal"
}
function greet() {      // function
    console.log("Hello, Man");
}

// ---


// 7. ### The typeof Operator --- 
console.log(typeof "hello");    //string
console.log(typeof 12); //number
console.log(typeof true);   //boolean
console.log(typeof null);   // object
console.log(typeof a);  // undefined
console.log(typeof Symbol("id"));   // symbol
console.log(typeof 12343245345435435n);  // bigint

// ---


// 8. ### Type Conversion vs Type Coercion ---
// ***Explicit Type Casting
console.log(Number("12"));
console.log(String(15));
console.log(Boolean("hello"));
console.log(Boolean(0));

// ***Implicit Type Casting
console.log("5" + 2);
console.log("5" - 3);
console.log("3" * 5);
console.log(false + 1);
console.log(true + 1);
console.log(null + 1);
console.log(undefined + 1);

// ***Falsy value: false, 0, "", null, undefined, null
// ***Truthy value: "hello", "0", "false", [], {}

if ("hello") console.log("Truthy");
if (0) console.log("Falsy");
if([]) console.log("Truthy");
if ({}) console.log("Truthy");

// ---


// 9. ### Operator---
// ***Arithmetic Operator
let a1 = 40, b = 20;
console.log(a1 + b);
console.log(a1 - b);
console.log(a1 * b);
console.log(a1 / b);
console.log(a1 % b);
console.log(a1 ** b);

//  ***Increment and Decrement 
let x1 = 10;
console.log(x1++);
console.log(++x1);
console.log(x1--);
console.log(--x1);

// ***Assignment Operator
let x2 = 23;
console.log(x2 += 20);  //43
console.log(x2 -= 3);    //40
console.log(x2 *= 2);    //80
console.log(x2 /= 2);    //40
console.log(x2 **= 2);   //1600

// ***Comparison Operator
console.log(5 == "5");  //true
console.log(5 === "5"); //false
console.log(5 != "5");  //false
console.log(5 !== "5"); //true
console.log(5 > 3); //true
console.log(5 <= 5);    //true

// ***
console.log(0 == false);    //true
console.log("" == false);   //true
console.log(null == undefined); //true
console.log(0 === false);   // false

// ***Logical Operator
let a2 = true, b2 = false;
console.log(a2 && b2);    // false
console.log(a2 || b2);    // true
console.log(!a2);    // false

// ***
console.log("hello" && "word"); //word
console.log(0 && "word");   // 0
console.log("" || "default");  // word
console.log("user" || "guest"); // user


// ***Ternary Operator
age >= 18? console.log("Adult") : console.log(Minor);

// ---


// 10. ### Strings 
let s1 = 'Vaibhav';
let s2 = "Alat";
let s3  = `${s1} and ${s2}`
console.log(s1 + s2);

// *** String Method 
console.log("hello".length);
console.log("vaibhav".toUpperCase());
console.log("VAIBHAV".toLowerCase());
console.log("   hello  ".trim());
console.log("hello".concat(" world"));
console.log("hello".indexOf("l"));
console.log("vaibhav".slice(2, 3));
console.log("vaibhav gajanan alat".split(" "));
console.log("vaibhav".lastIndexOf("a"));
console.log("vaibhav".includes("a"));
console.log("alat".charAt(1));
console.log("vaibhav".match("ai"));
console.log("Hello".repeat(2));
console.log("me".replace("e", "eet"));
console.log("Vaibhav vaibhav".replaceAll());
console.log("Gajanan".startsWith("Ga"));
console.log("Gajanan".endsWith("an"));
console.log("Vaibhav"[2]);
console.log("vaibhav".substring(1, 4));

// *** string is immutable (create new string)
let str1 = "vaibhav";
let str2 = str1.toUpperCase();
console.log(str2);

// ---

// 11. ### Numbers ---
let n = 3.14159;
console.log(n.toFixed(2));  // 3.14
console.log(Number("23"));  // 23
console.log(Number("23vaibhav"));   // NaN
console.log(parseInt("23vaibhav")); // 23
console.log(parseInt("vaibhav"));   // NaN
console.log(parseFloat("3.12rupees"));  // 3.12
console.log(isNaN("Vaibhav"));  // true
console.log(Number.isInteger(4));   // true
console.log(Number.isInteger(3.14159)); // false

// *** Math Objects
let math = 24.65
console.log(Math.round(math));
console.log(Math.ceil(math));
console.log(Math.floor(math));
console.log(Math.PI);
console.log(Math.sqrt(9));
console.log(Math.min(12, 121, false, 3423, 234));
console.log(Math.max(234, 23, true, 3243, 1))
console.log(Math.random()* 10 + 1);
console.log(Math.pow(10, 2));
console.log(Math.log(10));
console.log(Math.abs(-4));
console.log(Math.E);

// ---


// 12. ### Conditionals
// *** if else
let age2 = 18;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("can drive");
    } else {
        console.log("Get a license first");
    }
} else {
    console.log("Too younger to drive.");
}

// *** switch statement
let day = "Friday"
switch(day) {
    case "Monday":
        console.log("Start the week");
        break;
    case "Friday":
        console.log("Weekend is comming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend!");
        break;
    default: 
        console.log("Midweek day");
}

// ---


// 13. ### Loops --- 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log("vaibhav");
    i++;
}

do {
    console.log("Alat");
    i++;
} while (i < 5)

let fruits = ['Mango', 'Banana', 'Apple'];
for (let fruit of fruits) {
    console.log(fruit);
}

let obj1 = {
    fName: 'Vaibhav',
    mName: 'Gajanan',
    lName: 'Alat'
}
for (let info in obj1) {
    console.log(info, ":", obj1[info]);
}

// ---


// 14. ### Break and Continue ---
for (let i = 1; i <= 10; i++) {
    if (i === 5) 
        break;
        console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// --- 


// 15. ### Taking User Input 
// let yourName = prompt("What is your name?");
// console.log("Hello,  " + yourName);

// let yourAge = Number(prompt("Enter your age:"));
// if (yourAge >= 18) console.log("Adult");
 
// --- 


// ### 16. Putting It All Together — Mini Projects

// These projects use **only Phase 1 concepts**. Have students attempt all of them.

// ### Project 1: Simple Calculator

// ```jsx
// let num1 = Number(prompt("Enter first number:"));
// let ope = prompt("Enter a operation:").trim();
// let num2 = Number(prompt("Enter second number:"));
// let result;

// if (ope === '+') { result = num1 + num2; }
// else if (ope === '-') { result = num1 - num2; }
// else if (ope === '*') { result = num1 * num2 }
// else if (ope === '/') { result = num2 !== 0? num1 / num2 : "Can't divide by 0"; }
// else { result = "Invalid operator."; }
// console.log(result);

// ```


// ### Project 2: FizzBuzz (the classic interview question)

// Print numbers 1 to 50. But:

// - For multiples of 3, print "Fizz"
// - For multiples of 5, print "Buzz"
// - For multiples of both, print "FizzBuzz"

// ```jsx
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 && 5 == 0) {console.log("FizzBuzz");}
//     else if(i % 3 == 0) {console.log("Fizz");}
//     else if (i % 5 == 0) {console.log("Buzz");}
//     else {console.log(i);}
// }

// ```


// ### Project 3: Number Guessing Game

// ```jsx
// let ran = Math.floor(Math.random() * 100 + 1);
// let attempt = 0;
// let guess;
// do {
//     guess = Number(prompt("Enter any number"));
//     attempt++;
//     if (guess > ran)    console.log("Guess is higher");

//     else if (guess < ran)   console.log("Guess is lower");
    
// }   while (guess !== ran)   console.log(`Your ${attempt} attempted`);


// ```

// ### Project 4: Temperature Converter

// Take a temperature and a unit (C or F), convert to the other.

// ```jsx

// let temp = Number(prompt("Enter a temperature:"));
// let unit = prompt("Is it C or F").toLowerCase();
// if (unit === 'c') console.log(((temp * 9/5) + 32).toFixed());
// else if (unit === 'f') console.log(((temp - 32 ) * 5/9).toFixed(2));


// ```

// ### Project 5: Count Vowels in a String

// ```jsx

// let str3 = prompt("Enter a string:").toLowerCase();
// let count = 0;
// let vowels = "aeiou";
// for (let str of str3) {
//     if (vowels.includes(str)) count++;
// }
// console.log(`${str3} contain ${count} vowels.`);

// ```

// function unsoldProducts() {
//     // Write your code here
//     let atom = [1, 3, 4, 5, 3, 4, 2]
//     // let atom = products.concat(sold);
//     let neverSold = atom.filter( value => atom.indexOf(value) === atom.lastIndexOf(value));
//     console.log(neverSold);
// }
// unsoldProducts();
