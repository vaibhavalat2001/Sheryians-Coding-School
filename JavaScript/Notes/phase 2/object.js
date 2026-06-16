// Phase 2 part C --- Objects
// ***object is a collection of key-value pairs.

// 1. Creating objects 
let obj = {
    name: "Vaibhav", 
    age: 24, 
    city: "Yavatmal", 
    isStudent: true,
}
console.log(obj);

// --- 


// 2. Accessing Properties 
console.log(obj.name);  // dot notation
console.log(obj["age"]);    // bracket notation
let key = "city";
console.log(obj[key]);  // Yavatmal
console.log(obj.key);   // undefined

// ---


// 3. Adding, Updating, Deleting Properties 
let person = {
    name: "Vinayak", 
    age: 21, 
    city: "Malkinhi", 
    isProfessionl: true
}

person.degree = "BCA";  // add using dot
person["country"] = "India";    // add using bracket
person.age = 24;    // update
delete person.isProfessionl;
console.log(person);

