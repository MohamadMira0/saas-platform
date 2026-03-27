//Todo: Types =  string, number, boolean, undefine, null, array, object, NaN

// let fName = " Mohammed";
// let age = 10;
// let x1 = true;
// let notDefind;
// let isNull = null;
// let arr = ["aleppo", 24, "Mohammed"];

// let obj1 = {
//   city: "Aleppo",
//   age: 24,
//   name: "Mohammed",
// };
// console.log(obj1.name);
// console.log(arr[2]);

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
// numbers.unshift(1);
// numbers.push(100);
// numbers.pop();
// console.log(numbers);
// let sliceNum = numbers.slice(1, undefined);
// console.log(`that is origin array ${numbers}`);
// console.log(`that is after slice ${sliceNum}`);

// let spliceNum = numbers.splice(4, 100);
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

// function getProducts(para1, para2) {
//   console.log(para1, para2);
//   totalData = res.data.data;
//   return totalData;
// }

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

// console.log(numbers);
// let newNums = numbers.map((item) => (item = item * 2));
// console.log(numbers);
// console.log(newNums);

// console.log(numbers);
// console.log(numbers.filter((val) => val < 20));

// console.log(features.filter((feat) => feat.title == "task 1"));

// let x = 10;
// let y = x;
// console.log(`x = ${x} & y = ${y}`);
// y = 20;
// console.log(`x = ${x} & y = ${y}`);
// let obj1 = { name: "ahmed", age: 25, city: "Halab" };
// let obj2 = obj1;
// console.log("age in obj1 = ", obj1, "& age in obj2  = ", obj2);
// obj2.age = 23;
// console.log("age in obj1 = ", obj1, "& age in obj2 = ", obj2);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// obj1.city = "Aleppo";

// console.log(obj1);
// obj1.age = 20;
// console.log(obj1);

// delete obj1.age;
// console.log(obj1);

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);
// let arrSlice = arr.slice(undefined, 15);
// console.log(arrSlice);
// console.log(arr);

// let arrSplice = arr.splice(4, undefined, 70);
// console.log(arrSplice);
// console.log(arr);

// let arrNew = arr.map((item) => console.log(item * 2));
// console.log(arr);
// console.log(arrNew);

// let features = [
//   {
//     id: 1,
//     icon: "✅",
//     title: "Task Management",
//     desc: "Organize and prioritize your tasks with our intuitive task management system",
//   },
//   {
//     id: 2,
//     icon: "✅",
//     title: "task 2",
//     desc: "Organize and prioritize your tasks with our intuitive task 1 system",
//   },
//   {
//     id: 3,
//     icon: "✅",
//     title: "task 3",
//     desc: "Organize and prioritize your tasks with our intuitive task 1 system",
//   },
//   {
//     id: 4,
//     icon: "✅",
//     title: "task 4",
//     desc: "Organize and prioritize your tasks with our intuitive task 1 system",
//   },
//   {
//     id: 5,
//     icon: "✅",
//     title: "task 5",
//     desc: "Organize and prioritize your tasks with our intuitive task 1 system",
//   },
// ];

// let listFeaturs = features.map(
//   (item) => `<div>
//                     <div>${item.icon}</div>
//                     <h3>${item.title}</h3>
//                     <p>${item.desc}</p>
//                 </div>`,
// );

// // console.log(listFeaturs);
// console.log(features.filter((item) => item.title != "task 5"));
// console.log(arr);
// arr[0] = 100;
// console.log(arr);
// console.log(features[0]);
// features[0].city = "Aleppo";
// features[0].title = "First Task";
// console.log(features[0]);

// delete features[0].title;
// console.log(features[0]);

// console.log("the city : " + features[0].city);
// console.log(Object.keys(features[0]));
// console.log(Object.values(features[0]));
// console.log(Object.entries(features[0]));

// console.log(features)

// function first() {
//   console.log("أول");
//   second();
// }

// function second() {
//   console.log("ثاني");
// }

// first();

// function sum1(params) {
//   return;
// }
// let sum = (param1, param2) => {
//   let res = param1 + param2
//   return res;
// };

// let result = sum(5, 15) + 10;
// console.log(result);

let numbers = [10, 20, 25, 30, 35];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
//   console.log(numbers[i]);
// }

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  console.log(numbers[i]);
}
