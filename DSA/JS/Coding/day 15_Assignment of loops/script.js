//  13/ JAN /2026


// 1. Write a program to take input and check if number is Harshad number. Number is it divisible by it's sum of digits.
class Solution1 {

    checkHarshad(n) {

        // write your code here
        let sum = 0;
        let ori = n;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        if (ori % sum == 0)     console.log("Harshad Number");
        else    console.log("Not Harshad Number");
    }
}
let obj1 = new Solution1();
obj1.checkHarshad(21);


// 2. Write a program to take input and check if number is abundant or not. The number is sum of it's divisor is greater.
class Solution2 {

    checkAbundant(n) {

        // write your code here
        let sum = 0;
        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }

        if (sum > n) console.log("Yes");
        else console.log("No");;
    }
}
let obj2 = new Solution2();
obj2.checkAbundant(12);


// 3. Write a program to take input and give the all prime factor of the number.
class Solution3 {

    primeFactors(n) {
        // write you code here.
        let sum = "";
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                sum += i +" ";
                n = n / i;
            }
        }
        console.log(sum);
    }
}
let obj3 = new Solution3();
obj3.primeFactors(60);


// 4. Write a program to find is it Armstrong number or not.
class Solution4 {

    checkArmstrong(n) {
        // write your code here
        let count = 0;
        let ori = n;
        let num = n;
        while (n > 0) {
            count++;
            n = Math.floor(n / 10);
        }

        let arm = 0;
        while (ori > 0) {
            let num = ori % 10;
            arm += Math.pow(num, count); 
            ori = Math.floor(ori / 10);
        }
        
        if (num === arm)    console.log("Armstrong");
        else    return console.log("Not Armstrong");
    }
}
let obj4 = new Solution4();
obj4.checkArmstrong(153);


// 5. Write a program to take input and check it's number is neon number or not. The sum of the digits of the squre is equal to it self or not. 
class Solution5 {

    checkNeon(n) {

        // write your code here
        let squ = n**2;
        let sum = 0;
        while (squ > 0) {
            sum += squ % 10;
            squ = Math.floor(squ / 10);
        }
        if (n === sum)  console.log("Yes");
        else    console.log("No");
    }
}
let obj5 = new Solution5();
obj5.checkNeon(9);