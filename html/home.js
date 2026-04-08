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

// let numbers = [10, 20, 25, 30, 35, 100, 200, 250, 300, 350];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
//   console.log(numbers[i]);
// }

// for (number of numbers) {
//   console.log(number);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let i = 0;
// while (i < numbers.length - 4) {
//   console.log(numbers[i]);
//   i++;
// }

// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < 9);

// let message = "                 Hello             World!                 ";

// console.log(message.length);

// console.log(message.slice(0, -1));
// let newMessage = message.split(" ");
// console.log(newMessage);
// console.log(newMessage.join("."));

// let newMess = message.substring(0, 5);

// console.log(newMess.substring(0, -1));
// console.log(message.replace("H", "M"));
// console.log(message.repeat(3));
// console.log(message.repeat(3));
// console.log(message);
// console.log(message.trim().toUpperCase().toLowerCase());

// function even(num) {
//   return num % 2 === 0; console.log();3

// }

// even(4)

// let x = 5.8;

// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.round(x));
// console.log(Math.round(Math.random() * 1000000000));

// console.log(Math.max(5, 4, 7, 15));
// console.log(Math.min(5, 4, 7, 15, 1));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(9, 2));

// for (number of numbers) {
//   console.log(number);
// }

// let numbers = [10, 20, 25, 30, 35];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let i = 0;
// while (i < 0) {
//   console.log(numbers[i]);
//   i++;
//   console.log(`i = ${i}`);
// }

// do {
//   console.log(numbers[i]);
//   i++;
//   console.log(`i = ${i}`);
// } while (i < 2);

// let message = "Hello,World,My Name,Mohammed!";
// console.log(message.length);
// let newMessage = message.slice(0, -4);
// console.log(newMessage);
// let newMess = message.substring(0, -4);
// console.log(newMess);

// let splitMessage = message.split(",");
// console.log(message.split(","));
// console.log(splitMessage.join(" "));

// console.log(message.replace("h", "N"));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// function even(number) {
//   return number % 2 == 0;
// }
// let x = 4.97436;

// console.log(x.toFixed(2));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.round(x));
// console.log(Math.max(10, 202, 30));
// console.log(Math.min(10, -202, 30));
// console.log(Math.abs(-5));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(4));

// console.log(Math.pow(Math.round(x), 2));

// let x = 155;
// let y = 15;
// let z = 15;

// if (x >= y || x > z) {
//   console.log("x large");
// } else if (x !== y) {
//   console.log("y is equal x");
// } else {
//   console.log("y large");
// }

// let cond = x < y ? (x = 10) : x == z ? "x = z" : y == x ? ""  : "";
// console.log(cond);

// let global = "The Varible is global";

// function num(a, b) {
//   let local = "The Varible is local";
//   console.log(global);
//   console.log(local);
//   console.log(a);
// }

// num(5);
// console.log(local);

// Todo DOM

// let ele = document.getElementById("about");
// console.log(ele);
// let containerElements = document.getElementsByClassName("container");
// console.log(typeof containerElements);
// console.log(containerElements);

// let ele = document.querySelector("#home");
// ele.textContent = "New Home";
// console.log(ele);

// let x = 15;
// let y = "15";
// let z = 50;
// if ((x = y && x != z)) console.log("x is small");
// else if (y >= z) console.log("y < z");
// else console.log(" y is small");

// let cond =
//   x < y && x > z
//     ? console.log("x is small")
//     : y > z
//       ? console.log("y < z")
//       : console.log(" y is small");
// console.log(x < y);

// if (x != y) console.log("true");
// else console.log("false");
// =  || == || ===

// let global = "The Varibel is Global";

// function typeVar(a, b) {
//   let local = "The Varibel is Local";
//   console.log(local);
//   console.log(global);
//   console.log(a * b);
// }
// function sum() {
//   console.log(local);
// }

// sum();
// typeVar(6, 5);
// console.log(a * b);
// console.log(local);
// console.log(global);

// let ele = document.getElementById("logo");
// let ele = document.getElementsByClassName("container");
// let ele1 = document.get("container");
// let ele = document.querySelector(".container");
// let ele = document.querySelectorAll("");
// console.log(ele[0]);

// function name(para1, para2) {}

// let name1 = (para1, para2) => {};

// TODO: immediately invoked function experssion
// let x = 5;
// let y = 10;
// let res = 0;
// (function name(a, b) {
//   return (res = a + b);
// })(x, y);

// console.log(res);

// let element = document.getElementsByTagName("h1")[0];
// console.log(element);

// element.setAttribute("class", "title");
// console.log(element.hasAttribute("name"));
// element.removeAttribute("name");
// console.log(element.getAttribute("name"));

// element.id = "title";
// element.className = "hello ana class";
// element.title = "hello ana class";

// element.className += " memo";
// element.classList.add("memo");
// console.log(element.classList.contains("memo"));
// element.classList.remove("memo");
// console.log(element.classList.contains("memo"));
// element.classList.replace("ana", "I'm");
// console.log(element.classList);
// element.addEventListener("click", () => {
//   element.classList.toggle("active");
// });
// console.log(element.id);
// array.forEach(element => {
// });
// array.map(element => {

// });
// element.style.backgroundColor = "blue";

// let newElement = document.createElement("p");
// newElement.innerHTML = "<p>Mohammed</p>";
// newElement.textContent = "Mohammed";
// newElement.innerHTML = "Mohammed";
// newElement.innerText = "Mohammed";
// console.log(newElement);
// let bodyElement = document.getElementsByTagName("body")[0];
// console.log(bodyElement);
// bodyElement.append(newElement);
// bodyElement.appendChild(newElement);

// if (!isLogged) {

// }

// array.map(element => {

// });
// array.forEach(element => {

// });

// for(let i =0; i < 10; i++) {

// }

let headTitle = document.querySelector("h1");
// console.log(headTitle);
// console.log(headTitle);
// headTitle.setAttribute("class", "Mostafa");
// headTitle.setAttribute("id", "idendasd");
// console.log(headTitle.getAttribute("name"));
// console.log(headTitle.hasAttribute("name"));
// console.log(headTitle.removeAttribute("name"));
// console.log(headTitle.hasAttribute("name"));

// let x = { id: 4, name: "nani" };

// x.id = 6;

// console.log(x);

// headTitle.className += " rami";
// headTitle.id = "noha";
// headTitle.href = "noha";
// headTitle.classList.add("nour");
// headTitle.classList.contains("gass");
// headTitle.classList.replace("rami", "ssssss");
// headTitle.classList.remove("ssssss");
// console.log(headTitle.classList.contains("gass"));
// console.log(headTitle.classList);

// headTitle.addEventListener("click", () => {
//   headTitle.classList.toggle("active");
//   //   headTitle.style.color = "red";
//   //   headTitle.style.fontSize = "blue";
// });

// let newEle = document.createElement("p");
// // let newEle2 = document.createElement("h2");
// newEle.textContent = "lorem";
// // newEle2.textContent = "lorem hi im h2";
// // document.getElementsByTagName("body")[0].prepend(newEle);

// headTitle.before(newEle);
// let bodyTag = document.getElementsByTagName("body")[0];
// newEle.remove();
// bodyTag.removeChild(newEle);
// let divParent = document.getElementById("parent");
// let classNameHassan = document.getElementsByClassName("hassan")[0];
// let divParent = document.getElementById("parent");
// divParent.replaceChild(newEle2, headTitle);
// headTitle.replaceWith(newEle2);

// console.log(headTitle.parentElement);
// console.log(divParent.children);
// console.log(divParent.childElementCount);
// console.log(divParent.firstChild);
// console.log(divParent.firstElementChild);
// console.log(divParent.lastChild);
// console.log(divParent.lastElementChild);
// console.log(classNameHassan);
// console.log(classNameHassan.matches("#parent"));

// console.log(headTitle.classList.contains("name"));
// console.log(headTitle.classList.contains("name"));
// let headTitle = document.querySelector("h1");
// let divParent = document.querySelector("#parent");
// let paragraph = document.createElement("p");
// paragraph.textContent = "lorem dkajf;j adsjfl jadlsj fldaj";

// let bodyTag = document.body;
// console.log(bodyTag);
// bodyTag.append(paragraph);
// bodyTag.appendChild(paragraph);
// bodyTag.prepend(paragraph);

// headTitle.after(paragraph);
// headTitle.before(paragraph);
// headTitle.before

// headTitle.remove();
// divParent.removeChild(headTitle);

// console.log(divParent.children[0]);
// divParent.children[0].removeChild(headTitle);
// console.log(divParent.children[0]);

// divParent.replaceChild(paragraph, headTitle);

// headTitle.replaceWith(paragraph);

// console.log(headTitle.parentElement);
// console.log(divParent.children);
// console.log(divParent.childElementCount);
// console.log(divParent.firstElementChild);
// console.log(divParent.lastElementChild);
// console.log(divParent.matches(".hassan"));

// function handler() {
//   headTitle.classList.toggle("active");
// }
// headTitle.addEventListener("click", handler);
// headTitle.addEventListener("load", handler);
// headTitle.addEventListener("DOMContentLoaded", handler);
// headTitle.removeEventListener("click", handler)                                           ;

// headTitle.addEventListener

addEventListener("load", () => headTitle.classList.toggle("active"));
addEventListener("DOMContentLoad", () => headTitle.classList.toggle("active"));
// menubar.addEventListener("", () => {
//   menubar.classList.toggle("is-open")
// })

console.log(headTitle.offsetWidth);
console.log(headTitle.offsetHeight);
console.log(headTitle.clientWidth);
console.log(headTitle.clientHeight);
// console.log(elemnt.scrollLeft);
document.title = "Test";
console.log(document.title);
console.log(document.images);
console.log(document.forms);
let body = document.getElementsByTagName("body")[0];
console.log(body);
console.log(document.body);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);

// icon.addEventListener("click", () => {
//   if (body.classList.contains("dark")) {
//     body.style.background = "black";
//   }
// });

// console.log(window.localStorage.loglevel);

localStorage.setItem("Theme", "Dark");
let theme = localStorage.getItem("Theme");
console.log(localStorage);
console.log(theme);

theme = "light";
localStorage.setItem("theme", theme);
localStorage.Theme = "dark";
console.log(theme);
// localStorage.removeItem("theme");
// localStorage.clear();

console.log(window.history);
