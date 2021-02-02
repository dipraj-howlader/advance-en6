const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannnaaaaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Deepjol'}
];
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const id =element.name;
//     names.push(id);
    
    
// }
// console.log(names);

const names = students.map(s => s.name);
const ids = students.filter(z => z.id>40);
const bigger = students.find(s => s.id>40);
console.log(bigger);