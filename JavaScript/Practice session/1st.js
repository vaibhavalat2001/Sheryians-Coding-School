// function calculateAverage(marks) {

//     let average = marks.reduce((acc, marks) => {
//         return acc + marks;
//     }, 0);
//     console.log(average/marks.length);
// }
// calculateAverage([80, 90, 70, 85, 95]);


let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let count = {};
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}
let frequency = 0;
let mostFrequesnt;
for (let key in count) {
    if (count[key] > frequency) {
        frequency = count[key];
        mostFrequesnt = key;
    }
}
console.log(mostFrequesnt);

let user = {
    name: "Vaibhav",
    age: 24,
    city: "Yavatmal"
}
for (let key in user) {
    console.log(key + ":" + user[key]);
}


function sum(...num) {
    num.reduce((acc, n) => {
        return acc + n;
    }, 0)
}
console.log(sum(1, 2, 3));



// let cart = [
//     { name: "mounse", price: 500, qty: 2}, 
//     {name: "keyboard", price: }
// ]
// function getCartTotal(cart) {
//     return cart.reduce((acc, sum) => {
//         acc + (value.price * value * qty);
//     }, 0);
// }
// let price = getCartTotal(cart);
// console.log(price);



// letstudents= [
// {
// name:"Ritik",
// 🟢Arrays 9
// marks: [80,90,85]
// },
// {
// name:"Aman",
// marks: [50,40,60]
// }
// ]