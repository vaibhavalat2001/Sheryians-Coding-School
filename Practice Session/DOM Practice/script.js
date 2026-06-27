// PART 1 - JAVASCRIPT TASKS  (TASKS 1-15)  
 
// EASY LEVEL   (Tasks 1–5)  

let prompt = require("prompt-sync")();
// 1. EVEN OR ODD CHECKER  
// Write a function that takes one number as input. Inside the function, check whether the number divides 
// evenly by 2 using the % (modulo) operator. If there is no remainder, the function should return the word 
// "Even"; otherwise, it should return "Odd". Try your function with a few different numbers, including 0 and 
// a negative number, to make sure it always gives the right answer.  
// Concepts: functions, if-else, % (modulo) operator 
// =====>
// function num() {
//     let n = Number(prompt("Enter a number:"));
//     if (n === 0) return "The number is zero";
//     else if (n % 2 === 1) return "Odd";
//     else if (n % 2 === 0) return "Even";
//     else return "The number is negative";
// }
// let result = num();
// console.log(result);


// 2. GREETING GENERATOR  
// Write a function that takes two inputs: a person's name and their age. Inside the function, use a template 
// literal (a string written with backticks and ${ }) to build and return a sentence such as "Hello, Riya! You 
// are 21 years old." Make sure the name and age you pass in always show up correctly inside the sentence.  
// Concepts: functions, template literals  
// =====>
// function greet() {
//     let pName = prompt("Enter a name: ");
//     let age = Number(prompt("Enter a age: "));
//     return `Hello, ${pName}! You are ${age} years old.`;
// }
// let greeting = greet();
// console.log(greeting);


// 3. RECTANGLE AREA CALCULATOR  
// Write a function that takes the width and height of a rectangle as two separate inputs. Inside the function, 
// multiply  the  two  numbers  together  to  get  the  area,  and  return  that  result.  Test  the  function  with  a  few 
// different width and height values to confirm the area comes out correct.  
// Concepts: functions, parameters, return values  
// =====>
// function area() {
//     let w = Number(prompt("Enter a width: "));
//     let h = Number(prompt("Enter a height: "));
//     return w*h;
// }
// let react = area();
// console.log(react);


// 4. PRIVATE COUNTER WITH CLOSURES  
// Write an outer function that has one variable inside it to keep track of a count,  starting at  0. This outer 
// function should return another (inner) function that, every time it is called, increases the count by 1 and 
// returns  the  new  value.  The  important  part  is  that  the  count  variable  should  not  be  reachable  or 
// changeable from outside - the only way to change it should be by calling the function that was returned.  
// Concepts: closures, private variables  
// =====>  
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     }
  
// }
// let count = outer();
// console.log(count());   // 1
// console.log(count());   // 2


// 5. FIND THE LARGEST NUMBER  
// Write a function that takes an array of numbers and returns the largest number in it. You are not allowed 
// to use the built-in Math.max() method - instead, loop through the array yourself, compare each number 
// to the others, and keep track of the biggest one you have found so far.  
// Concepts: arrays, loops, comparison logic  
// =====> 
// function largest() {
//     let numArr = [3, 2, 19, 45, 39, 90];
//     let larg = numArr[0];
//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] > larg) {
//             larg = numArr[i];
//         }

//     }
//     return larg;
// }
// let highet = largest();
// console.log(highet);



// MEDIUM LEVEL   (Tasks 6–10)  
 
// 6. PRODUCT DATA PROCESSOR  
// You will work with an array of product objects, where each object has a name, a price, and a category. 
// First, use the map() method to make a new array that only contains the product names. Second, use the 
// filter() method to make another array that only contains products from one specific category. Third, use 
// the reduce() method to add up the prices of every product and return the total.  
// Concepts: map, filter, reduce  
// =====>   
// let product = [
//     {name: "headphone", category: "device", price: 200},
//     {name: "mobile", category: "device", price: 10000},
//     {name: "shirt", category: "cloth", price: 500}
// ]
// let proName = product.map((atom) => atom.name);     // itrate each array element and return new array
// let proCat = product.filter((atom) => "cloth" == atom.category);    // return element that pass the condition
// let proPrice = product.reduce((acc, atom) => atom.price + acc, 0);  // It's use for reduce array into singmle value.
// console.log(proName);   // ['headphone', 'mobile', 'shirt']
// console.log(proCat);    // [{ name: 'shirt', category: 'cloth', price: 500 }]
// console.log(proPrice);  // 10700


// 7. DEBOUNCE UTILITY FROM SCRATCH  
// Write your own function called debounce that takes two inputs: another function (fn) and a delay time in 
// milliseconds. Your debounce function should return a new function that, every time it is called, waits for 
// the  given  delay  before  actually  running  fn.  If  it  gets  called  again  before  that  delay  finishes,  it  should 
// cancel  the  earlier  wait  and  start  counting  the  delay  again  from  zero.  This  trick  is  useful  for  things  like 
// search boxes, where you don't want to run code on every single keystroke.  
// Concepts: closures, setTimeout/clearTimeout, higher-order functions  
// =====> 
// function debounce(fn, delay) {
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     };
// } 

// function search(query) {
//     console.log("Searching:", query);
// } 
// const debounceSearch = debounce(search, 5000);
// debounceSearch("hello");


// 8. SEQUENTIAL TASK RUNNER  
// Write three separate functions, where each one waits for a short delay (you can use a  
// Promise  with  setTimeout  inside  it)  and  then  logs  a  different  message  to  the  console,  such  as  "Step  1 
// done", "Step 2 done", and "Step 3 done". Then write one more function that uses async/await to run all 
// three, one after another, so Step 2 never starts before Step 1 has fully finished, and Step 3 never starts 
// before Step 2 has fully finished.  
// Concepts: async/await, promises, sequencing  
// =====>
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1 done.");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 2 done.");
//             resolve();
//         }, 2000);
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(("Step 3 done."));
//             resolve();
//         }, 3000);
//     });
// }
// step1()
// .then(() => step2())
// .then(() => step3());

// async function runSteps() {
//     await step1();
//     await step2();
//     await step3();
// }
// runSteps();


// 9. API DATA CLEANER  
// Write a function that uses fetch() to get data from a public API of your choice (for example,  
// JSONPlaceholder). Once the data arrives, pick out only the specific fields you actually need (for example, 
// just the title and the id) and return a new, simplified array or object built from those fields only. Wrap your 
// code  in  a  try/catch  block  so  that  if  the  network  request  fails,  your  function  handles  the  error  nicely 
// instead of crashing.  
// Concepts: fetch, async/await, try/catch, data transformation  
// =====>
// async function data() {
//     try {    
//         let response = await fetch('htps://jsonplaceholder.typicode.com/todos/1');
    
//         let data = await response.json();
    
//         let arr = [data.id, data.title];
//         console.log(arr);
//     }
//     catch(e) {
//         console.log("Error:", e);
//     }
// }
// data();


// 10. MINI EVENT EMITTER  
// Build  your  own  small  object  (you  can  call  it  an  event  emitter)  with  three  methods:  on(eventName, 
// callback) to register a function that should run when a named event happens, emit(eventName, data) to 
// actually  trigger  that  event  and  run  every  function  registered  for  it,  and  off(eventName,  callback)  to 
// remove a function you registered earlier. This lets different parts of your code talk to each other through 
// named events instead of calling each other directly.  
// Concepts: objects, functions as values, publish-subscribe pattern  
// =====>
let obj = {};



// HARD LEVEL   (Tasks 11–15)  
 
// 11. MEMOIZATION UTILITY  
// Write a function called memoize that takes another function (fn) as input and returns a new version of it. 
// This  new  version  should  remember  (cache)  the  result  every  time  it  is  called  with  a  particular  set  of 
// arguments. If it is ever called again later with the exact same arguments, it should return the saved result 
// right away instead of running fn again. This is handy for slow calculations that get called repeatedly with 
// the same input. Concepts: closures, caching, higher-order functions  
  
// 12. AUTO-RETRY FOR FAILING PROMISES  
// Write a function called retry that takes an async function and a number of attempts as inputs. Your retry 
// function should call the async function, and if it fails (throws an error or rejects), it should automatically 
// try calling it again, up to the number of attempts you chose. If every attempt fails, retry should finally give 
// up  and  reject  with  an  error.  Test  it  using  a  fake  function  that  fails  the  first  couple  of  times  and  then 
// succeeds.  
// Concepts: promises, loops/recursion, error handling  
  
// 13. MINI STATE STORE  
// Build  a  small  object  from  scratch  that  manages  one  piece  of  shared  data  (state).  It  should  have  a 
// getState()  method  that  returns  the  current  state,  a  setState(newState)  method  that  updates  the  state, 
// and  a  subscribe(callback)  method  that  lets  other  parts  of  your  code  register  a  function  to  be  called 
// automatically every time the state changes. This is similar to how popular state -management libraries 
// like Redux work behind the scenes, just in a much smaller form.  
// Concepts: closures, publish-subscribe pattern, state management  
  
// 14. DEEP CLONE UTILITY  
// Write a function called deepClone that takes any object or array, including ones with other objects and 
// arrays  nested  inside  them,  and  returns  a  brand-new  copy.  Changing  the  new  copy  afterward  should 
// never affect the original, no matter how deeply nested the data is. You are not allowed to solve this using 
// JSON.parse(JSON.stringify(...)) or any outside library - write the copying logic yourself, most likely using 
// recursion.  
// Concepts: recursion, objects, arrays  
  
// 15. CONCURRENCY-LIMITED TASK QUEUE  
// Write a function that takes a list of async tasks (functions that each return a promise) and a maximum 
// number, N, of tasks allowed to run at the same time. Your function should start tasks immediately, but 
// only N of them at once - as soon as one finishes, the next waiting task should start. Make sure every task 
// eventually runs and finishes, just never more than N of them running at the exact same moment.   
// Concepts: promises, concurrency control, queues 