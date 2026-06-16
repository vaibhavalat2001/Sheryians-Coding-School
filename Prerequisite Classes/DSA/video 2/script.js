// **Different between var, let, and const

// console.log(temp);
// var temp = 100;


// const a = 100;
// // temp = 10;
// console.log(a);

// let b = 10; 
// b = 20;
// console.log(b); 



//Q.1 **sum of two integer.
// let c = 10;
// let d = 20;
// console.log(c + d);



//Q.2 **Relation between string and integer. 
// String + String = String (Concatenation).
// String + int = String (concatenation)
// int + int = int (number)

// let s1 = "Vaibhav";
// let s2 = " Alat";
// console.log(s1 + s2);

// let str = "100";
// let int = 100;
// console.log(str + int);

// let num1 = 10;
// let num2 = 20;
// console.log(typeof (num1 + num2));

// let a = 10;
// let b = 20;
// console.log("The sum of "+ a +" and"+ b +" is: "+ a+b);  // 1020
// console.log("The sum of "+ a +" and"+ b +" is: "+ (a+b));



//Q.3 **Sum and message

// type coercion: check operand type according to operator
// let str = "10";
// let num = 20;
// console.log(str + num); // num convert into string output: 1020
// console.log(str - num); // str convert into int output: -10



//Q.4 **Accept and print the answer.
// let prompt = require('prompt-sync')();
// let age = Number(prompt("Enter you age: "));    // prompt always return string value so we parse into number
// console.log(typeof age);
// console.log(`Your age: ${age}`);



//Q.5 **swap two variable via 3 method.
// let a = 10;
// let b = 20;

// [b, a] = [a, b]; // 1st method

// a = a + b;   // 2nd method
// b = a - b;
// a = a - b;

// let temp = a;   // 3rd method
// a = b;
// b = temp;

// console.log(a + "\n"+ b);

// let a = 10.49;
// let b = 4.534;
// console.log(a + b);

function calculateCompoundInterest(P, r, t, n) {
    // Write your logic here
    let A = P*(1+r/n)**(n*t);
    console.log(A);
}

calculateCompoundInterest(1000, 0.5, 10, 4);