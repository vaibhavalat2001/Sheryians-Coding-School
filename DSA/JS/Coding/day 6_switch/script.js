// switch statement 
let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number: '));
switch(n) {
    case 1: 
    case 3:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesady");
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
    case  7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// Check in string how much vowel and consonent using switch.
let str = prompt("Enter a string: ");
let consonent = 0, vowel = 0;
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    switch(ch) {
        case 'a':
        case 'e':   
        case 'i':
        case 'o':
        case 'u':
            vowel++;
            break;
        default: 
            consonent++;
    }
}
console.log("Vowel: "+ vowel); 
console.log("Consonent: "+ consonent); 


// Write the program to calculate area of circle, triangle, and rectangle using a switch statement.
let num = Number(prompt("Enter 1 for cicle, 2 for triangle, and 3 for rectangle: "));

switch(num) {
    case 1: {
        let r = Number(prompt("Enter a radius: "));
        let a = (Math.PI*Math.pow(r, 2)).toFixed(2);
        console.log("Area of Cicle: "+ a);
        break;
    }
    case 2:{
        let s1 = Number(prompt("Enter 1st side length: "))
        let s2 = Number(prompt("Enter 2st side length: "))
        let s3 = Number(prompt("Enter 3st side length: "))
        let s = (s1 + s2 + s3) / 2;
        let a = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)).toFixed(2);
        console.log("Area of Triangle: "+ a);
        break;
    }
    case 3: {
        let l = Number(prompt("Enter length: "));
        let b = Number(prompt("Enter breadth: "));
        console.log("Area of Rectangle: "+ (l * b).toFixed(2));
        break;
    }
    default:
        console.log("Invalid number: ");
}