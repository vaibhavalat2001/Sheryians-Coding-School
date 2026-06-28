let marks = [80, 90, 70, 85, 95];
let average = marks.reduce((acc, marks) => {
    return acc + marks.length
}, 0);
console.log(average);

