const numbers = [1,2,3,4,5,6,7,8,9];
const part = numbers.slice(2,5);

const remove = numbers.splice(2,5, 77,88,99);
// console.log(remove);
// console.log(numbers);

const to = numbers.join(" dIPRA ");
console.log(to)