// const student = [
//   { name: "Ahmed", age: 19, city: "lahore", province: "punjab" },
//   { name: "Ali", age: 21, city: "lahore", province: "punjab" },
//   { name: "Ammar", age: 20, city: "lahore", province: "punjab" },
//   { name: "zain", age: 19, city: "lahore", province: "punjab" },
// ];

// console.log(student);

// const employee = {
//     name: "Tony",
//     position: "Officer",
//     salary: 30000,
// };

// delete employee.name

// console.log(employee);

// const person = {
//     name: "Bob",
//     age: 30,

//     greet: function () {
//         console.log("Bob says Hi!");
//     }
// };

// person.greet();


// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// const sum = num1 + num2;

// console.log(`The sum of ${num1} and ${num2} is ${sum}`);



// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

// let c;

// c = a;
// a = b;
// b = c;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);



let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// const fahrenhiet = prompt("Enter a fahrenhiet value: ");

// const celsius = (fahrenhiet * 1.8) - 32

// console.log(`${fahrenhiet} degree celsius is equal to ${celsius} degree fahrenheit.`);


// let students = [
//     { name:'John', age:20 , country: "America" }, 
//     { name: "Sara", age:21 , country: "England"}, 
//     { name: "Jack" , age: 22 , country: "London"}
//     ];

// // using forEach
// students.forEach(myFunction);

// function myFunction(item) {

//     console.log(item);
// }


// const students = ['John', 'Sara', 'Jack'];

// students.forEach(name => {
//   console.log(name);
// });


// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];

// for (let i = 0; i < arrayItems.length; i++) {
//   copyItems.push(arrayItems[i]);
// }

// console.log(copyItems);