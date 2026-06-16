// Phase 2 Part A --- Functions

document.body.style.backgroundColor = "black";


// 1. ### Why do we need functions 
let length1 = 5, breadth1 = 3;
let area1 = length1 * breadth1;
console.log(area1);

let length2 = 10, breadth2 = 20;
let area2 = length2 * breadth2;
console.log(area2);

let length3 = 2, breadth3 = 8;
let area3 = length3 * breadth3;
console.log(area3);


function calculateArea(length, breadth) {
    return length * breadth;
}
console.log(calculateArea(4, 3));
console.log(calculateArea(42, 13));
console.log(calculateArea(45, 23));

// ---


// 2. ### Function Declaration 
function greet(name) {
    console.log("Hello, " + name);
}
greet("Vaibhav");
greet("Alat");

// --- 


// 3. ### Function Expression 
let greet1 = function(name) {1
    console.log("Hello, "+ name);
};
greet1("Vaibhav");

// --- 


// 4. ### Anonymous Function
const sayHi = function() {                  
    console.log("Hi!");
};
sayHi()

// ---


// 5. ### Arrow Functions (Modern, Preferred)
const add = (a, b) => {
    return a + b;
}
console.log(add(10, 2))

// ---


const add1 = (a, b) => a+b;
const square = x => x * x;
const greet2 = () => console.log("Hello"); 
const add2 = (a, b) => {
    const sum = a + b;
    return sum;
};

// --- 


// 6. Parameters:  Defaults, Rest, and Edge Cases 
function greet(name = "guest") {
    console.log("Hello, "+ name);
}
greet("Vaibhav");
greet();

function sum(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += 0;
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

function add3(a, b) {
    return a + b;
}
console.log(add1(3));
console.log(add(1, 2, 3, 4, 5));

// --- 


// 7. Return Values 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 3));

// rule about return 
function checkAge(age) {
    if (age < 0) return "invalid";
    if (age >= 18) return "Adult";
    return "Minor";
}
console.log(checkAge(24));

// ---


// 8. Functions as First-class Citizens

// store in a variable 
const sayHello = function() {
    console.log("Hi");
}
sayHello();

// pass as argument 
function callTwice(fn) {
    fn();
    fn();
}
callTwice(sayHello);


function makeGreeter() {
    return function(name) {
        console.log("My name is: "+ name);
    }
}
const makeHello = makeGreeter();
makeHello("Vaibhav");

// --- 


// 9. Callback Functions 
function processUser(name, callback) {
    console.log("Processing user: "+ name);
    callback(name);
}

function welcome(name) {
    console.log("Welcome, "+ name);
}

processUser("Vaibhav", welcome);

// async anonymus function 
setTimeout(function() {
    console.log("after 3 second passed the funtion");
}, 3000);

// --- 


// 10. Higher-Order function 
// --> Take another function as a arguments
// --> return a function

// --- 


// 11. IIFE 
(function() {
    console.log("I run immediately!");
})()

// --- 


// 12. Pure vs Impure Functions 
function add3(a, b) {
    return a + b;
}
add3(4, 5);

let total = 0;
function addTotal(n) {
    total += n;
    return total;
}
addTotal(3);


// 13. Recursion (basics) 
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));


// ----- 
