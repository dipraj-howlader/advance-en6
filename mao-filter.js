const numbers =[3,4,5,6,7,8];
const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square2 (element){
//     return element * element; 

// }

// let square = element => element * element;
// // another

// const result = numbers.map(x => x*x);

// console.log(result);


// filter
// find

// const result = numbers.filter(z => z <= 5);

const bigger = numbers.find(z => z < 5);

console.log(bigger);