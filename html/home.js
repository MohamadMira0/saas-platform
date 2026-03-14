//Todo: Types =  string, number, boolean, undefine, null, array, object, NaN

// let fName = "Mohammed";
// let age = 10;
// let x = true;
// let notDefind;
// let isNull = null;
// let arr = ["aleppo", 24, "Mohammed"];

// let obj1 = {
//   age: 24,
//   city: "Aleppo",
//   name: "Mohammed",
// };
// let firstOfObj = obj1.name;
// console.log("firstOfObj is " + firstOfObj);
// let firstName = arr[0];
// console.log("firstName in array is " + firstName);
// let obj = {
//   name: "Mohammed",
//   age: 24,
//   city: "Aleppo",
// };
// console.log(typeof 10 / 0);
// console.log(typeof isNull);

// let product = {};
// function addProduct() {
//   console.log("first function");
// }

// let num1 = 15;
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// const sum1 = (num1, num2) => console.log(num1 + num2);

// sum(10, 20);
// sum1(10, 20);

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// let sliceNum = numbers.slice(1, -);
// console.log(`that is origin array ${numbers}`);
// console.log(`that is after slice ${sliceNum}`);

// let spliceNum = numbers.splice(1, 2, 60, 666);
// console.log(`that is origin after splice ${numbers}`);
// console.log(`that is splice after splice ${spliceNum}`);

// console.log(numbers.indexOf(30));
// console.log(numbers.lastIndexOf(30));

// numbers.unshift(5, 7, "Mira", true, [1, 2, 3]);
// numbers.shift();
// console.log(numbers.length);
// console.log(numbers);

// let num1 = 5;
// function sum(num1, num2) {
//   return num1 + num2;
// }

// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// sum = (num1, num2) => {
//   return num1 - num2;
// };
// console.log(numbers);
// let pushArr = numbers.push(1, 2, 3);
// console.log(numbers);

// features.map((num, index) => console.log(num, index));
// let numbers = [10, 20, 30];
// let features = [
//   {
//     id: 1,
//     icon: "👥",
//     title: "task 1",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
//   {
//     id: 2,
//     icon: "👥",
//     title: "task 2",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
//   {
//     id: 3,
//     icon: "👥",
//     title: "task 3",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
//   {
//     id: 4,
//     icon: "👥",
//     title: "task 4",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
//   {
//     id: 5,
//     icon: "👥",
//     title: "task 5",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
//   {
//     id: 6,
//     icon: "👥",
//     title: "task 6",
//     description:
//       "Work seamlessly with your team members in real-time collaborations",
//   },
// ];

// console.log(features);
// features.map((item) => console.log(item));

// console.log(numbers.filter((item) => item > 10));

// console.log(features.filter((feat) => feat.title == "task 1"));

// let x = 10;
// let y = x;
// console.log(`x = ${x} & y = ${y}`);
// y = 20;
// console.log(`x = ${x} & y = ${y}`);
// let obj2 = obg1;
// console.log("x = ", obg1, "& y = ", obj2);
// obj2.age = 23;
// console.log("x = ", obg1, "& y = ", obj2);

let obj1 = { name: "ahmed", age: 25 };

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

obj1.city = "Aleppo";

console.log(obj1);
obj1.age = 20;
console.log(obj1);

delete obj1.age;
console.log(obj1);
