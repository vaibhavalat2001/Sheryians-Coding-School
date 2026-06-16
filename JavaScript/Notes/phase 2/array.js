// Phase 2 Part B -- Arrays 

// 1. Creating Arrays 
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Vaibhav", 24, true, null];
let empty = [];

// --- 


// 2. Accessing Elements (Zero-indexed) 
let fruit = ["apple", "banana", "chery", "mango"]
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);

console.log(fruit[fruit.length-1]);
console.log(fruit.at(-1));  // modern way

// --- 


// 3. Array length 
let arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr);

// --- 


// 4. Mutating Methods (change the original array) 
let arr1 = [2, 3, 4];
console.log(arr1.push(5));  // return length
console.log(arr1.pop());    // return removed from end
console.log(arr1.unshift(3));   // return length
console.log(arr1.shift());    // return removed from begining
console.log(arr1.reverse());    // reverse
console.log(arr1.sort());

// splice
let arr2 = [10, 8, 3, 2];
arr2.splice(1, 0, 5, 2);   // [10, 5, 2, 8, 3, 2]
arr2.splice(2, 2, 1);    // [10, 5, 1, 3, 2]
arr2.splice(2, 3);  // [10, 5]
console.log(arr2);

// sort
let sorting = [10, 3, 2, 7, 1, 5]
sorting.sort((a, b)=> a-b);   // ascending  [1, 2, 3, 5, 7, 10]
sorting.sort((a, b) => b-a);    // dscending    [10, 7, 5, 3, 2, 1]
console.log(sorting);

// --- 


// 5. Non-Mutating methods (Return New Array) 
let arr3 = [4, 3, 2, 9, 8, 1];
console.log(arr3.slice(1, 2));  // 3
console.log(arr3.includes(8));  // true
console.log(arr3.concat(4));    // [4, 3, 2, 9, 8, 1, 4]
console.log(arr3.indexOf(3));   // 1
console.log(arr3.indexOf(99));
console.log(arr3.join('-'));    // 4-3-2-9-8-1

// --- 


// 6. Iteration Methods (The Powerful onces) 
// forEach (perform operation on each array element)
let arr4 = [1, 2, 3];
arr4.forEach(function(n){
    console.log(n * 2);  // 2, 4, 6
});

arr4.forEach((n) => console.log(n * 3));   // 3, 6, 9

let me = arr4.forEach((value, index, array) => {
    console.log(index, value);
    return value;   // undefined
});
console.log(me);
// forEach not return anything 

// Map (return new array)
let arr5 = [10, 3, 2, 1];
let num = arr5.map(n => {
    console.log(n);  // [10, 3, 2, 1]
    return n + 1;   // [11, 4, 3, 2]
});
console.log(num);

// Filter (give array that pass condition)
let nums = arr5.filter((n) => n % 2 == 0);
console.log(nums); // [10, 2] 

// reduce (reduce array into single value)
let sum1 = arr5.reduce((acc, n) => acc + n, 0);
console.log(sum1);

// find (return the first matching element) 
let find = [{name: "Vaibhav", age: 24}, {name: "Vinayak", age: 20}];
let found = find.find((u) => u.age <= 20);
console.log(found);

// findIndex -- return the index of first match
let findInd = [1, 5, 8, 3, 2];
let ind = findInd.findIndex((n) => n > 7);
console.log(ind);

// some -- does at least one match
let some = [1, 3, 9, 2, 5];
console.log(some.some((n) => n > 2));
console.log(some.some((n) => n > 10));

// every -- do all match
let every = [7, 2, 3, 4, 5, 6];
console.log(every.every((n) => n > 1));

// --- 


// 7. Array Destructing 
let arr6 = [10, 20, 30];
let a = arr6[0];    // old way
let b = arr6[1];
let [x, ,y] = arr6;  // skip 2nd
console.log(x, y);
let [p, q, r] = arr6;   // all destructure
console.log(p, q, r);
let [m = 10, n = 20] = [5]; // default value
console.log(m, n);
let v = 33, t = 22;
[v, t] = [t, v];
console.log(v, t);

// --- 


// 8. Spread(expand) and Rest(collect) with Arrays
let nums1 = [1, 2, 3];  // right side is spread
let more = [0, ...nums1, 9, 8]; // rest array element
console.log(more);
let copy = [...nums1];   // copy array(shallow)
console.log(copy);
let combined = [...[1, 2], ...[3, 4]];
console.log(combined);
console.log(Math.max(...[5, 2, 9, 1]));

function sum(...nums) {     // left side is rest
    return nums.reduce((a, b) => a+b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// --- 


// 9. Multi-Dimensional Arrays. 
let matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];
console.log(matrix[2][1]);  // 8 (row 2, column 1)

for (let row of matrix) {
    console.log(row);
    for (let val of row) {
        console.log(val);
    }
}

