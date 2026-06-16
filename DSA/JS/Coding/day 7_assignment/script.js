// 1. Write a program to find greatest among the numbers.
function findGreatest(a, b, c) {
    // Write your logic here
    let arr = [a, b, c];
    let greatest = arr[0];
    for (let num of arr) {
        if (greatest < num) {
            greatest = num;
        }
    }
    return greatest;
}
let greatest = findGreatest(3, 7, 5);
console.log(greatest);


// 2. Write a program to check the day of the week using switch statement.
function printDayName(day) {
    //write your code here
    switch(day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
let dayName = printDayName(3);
console.log(dayName);


// 3. Write a program that takes a movie rating as a input and determines the movi'es status based on the following conditions.
class Solution {
    get_movie_status(ratingStr) {
        // Write your code here
        if (ratingStr >= 0.0 && ratingStr <=2.0) {
            return "Flop";
        } else if (ratingStr <= 3.4) {
            return "Semi-hit";
        } else if (ratingStr <= 4.5) {
            return "Hit";
        } else if (ratingStr <= 5.0) {
            return "Super Hit";
        }
    }
}
let solution = new Solution();
let status = solution.get_movie_status(4.0);
console.log(status);


// 4. Write a program to take a single character input and check it's vowel or consonent otherwise give invalid input.
function checkChar(ch) {
  //write your code here
  let char = ch.toLowerCase();

  if (!/[a-z]/.test(char) || char.length !== 1) {
    return "Invalid input";
  }

  if ("aeiou".includes(char)) {
      return "Vowel";
  } else    return "Consonent";
}

let char = checkChar('vai');
console.log(char);