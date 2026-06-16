// ** Conditional Statement:

let prompt = require("prompt-sync")();

// ** if else
// let age = Number(prompt("Enter you age: "));
// if (age >= 18) {
//     console.log("Valid for vote: ");
// }
// else {
//     console.log("Invalid for vote: ");
// }


// ** if else if
// let marks = prompt("Enter a marks: ");
// if (marks > 90)  console.log("Excellent");
// else if (marks > 80 && marks <= 90) console.log("Best");
// else if (marks > 70 && marks <= 80) console.log("Better");
// else if (marks > 60 && marks <= 70) console.log("Good");
// else console.log("Try next time");


//Q.1: ** Accept two numbers and print the greatest between them.
// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// if (num1 > num2) console.log(`${num1} is greater than ${num2}`);
// else console.log(`${num2} is greater than ${num1}`);


//Q.2: ** Accept an integer and check wheather it is an even number or odd.
// let num = Number(prompt("Enter a number: "));
// if (num % 2 == 0) console.log(`${num} is a even number.`);
// else console.log(`${num} is an odd number`);


//Q.3: ** Accept three numbers and print greatest among them.
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let num3 = Number(prompt("Enter third number: "));

// if (num1 > num2 && num1 > num3) console.log(`${num1} is a greatest number`);
// else if (num2 > num1 && num2 > num3) console.log(`${num2} is a gretest number`);
// else console.log(`${num3} is a greatest number`);


//Q.4: ** Accept the year and chek if it is a leap year or not.
// let year = prompt("Enter a leap year: ");
// if (year % 4==0 && year % 100 !=0 || year % 400 == 0) console.log(`${year} is a leap year`);
// else console.log(`${year} not a leap year.`);


//Q.5: ** Shop discount - discription on graphic. 
// let amount = Number(prompt("Enter amount: "));
// let dis = 0;
// if (amount > 0 && amount <= 5000) dis = 0;
// else if (amount > 5000 && amount <= 7000)   dis = 5;
// else if (amount > 7000 && amount <= 9000)   dis = 10;
// else dis = 20; 
// console.log(`You saved ${((amount*dis)/100).toFixed()}, now you need to pay ${amount - ((amount*dis)/100).toFixed()}`);


//Q.6: ** Electric Unit calculation: Bijali Bill - Description graphic.
// 0 - 100: 4.2/unit, 101 - 200: 6/unit, 201 - 400: 8/unit, more than 400: 13/unit
// let unit = Number(prompt("Enter a unit: "));
// let bill = 0;
// if (unit > 0 && unit <= 100)    bill = unit * 4.2;
// else if (unit > 100 && unit <= 200)     bill = 100*4.2 + (unit-100)*6;
// else if (unit > 200 && unit <= 400)     bill = 100*4.2 + 100*6 + (unit - 200)*8;
// else    bill = 100*4.2 + 100*6 + 200*8 + (unit - 400)*13;
// console.log(bill.toFixed());

// if (unit > 400) {
//     bill = (unit - 400) * 13;
//     unit = 400;
// }

// if (unit > 200 && unit <= 400) {
//     bill += (unit - 200) * 8;
//     unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//     bill += (unit - 100) * 6;
//     unit = 100; 
// } 

// if (unit > 0 && unit <= 100) {
//     bill += unit * 4.2;
// }
// console.log(bill.toFixed());



//Q.7: Counting number of days in a given month of a year.
// let month = prompt("Enter a month: ");
// let year = prompt("Enter a year: ");
// let days = 0
// if (month == 2) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)    days = 29;
//     else days = 28;
// }
// else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 ||
//     month == 10 || month == 12)     days = 31
// else days = 30;
// console.log(days);

let x = 0;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
