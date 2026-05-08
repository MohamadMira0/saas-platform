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

// let headTitle = document.querySelector("h1");
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

// addEventListener("load", () => headTitle.classList.toggle("active"));
// addEventListener("DOMContentLoad", () => headTitle.classList.toggle("active"));
// menubar.addEventListener("", () => {
//   menubar.classList.toggle("is-open")
// })

// console.log(headTitle.offsetWidth);
// console.log(headTitle.offsetHeight);
// console.log(headTitle.clientWidth);
// console.log(headTitle.clientHeight);
// console.log(elemnt.scrollLeft);
// document.title = "Test";
// console.log(document.title);
// console.log(document.images);
// console.log(document.forms);
// let body = document.getElementsByTagName("body")[0];
// console.log(body);
// console.log(document.body);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.location);

// icon.addEventListener("click", () => {
//   if (body.classList.contains("dark")) {
//     body.style.background = "black";
//   }
// });

// console.log(window.localStorage.loglevel);

// localStorage.setItem("Theme", "Dark");
// let theme = localStorage.getItem("Theme");
// console.log(localStorage);
// console.log(theme);

// theme = "light";
// localStorage.setItem("theme", theme);
// localStorage.Theme = "dark";
// console.log(theme);
// localStorage.removeItem("theme");
// localStorage.clear();

// console.log(window.history);

// console.log(headTitle.offsetHeight);
// console.log(headTitle.offsetWidth);
// console.log(headTitle.getBoundingClientRect());
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(scrollX);
// console.log(scrollY);
// console.log(headTitle.scrollLeft);
// console.log(headTitle.scrollLeft);

// console.log(document.title);
// document.title = "Mujahed";
// console.log(document.URL);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.body);

// console.log(window.history);

// localStorage.setItem("name", "Mohab");
// localStorage.setItem("Name", "Mosaub");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));

// localStorage.clear();

// let names = ["Ahmad", "Mohammed", "Ghaith"];
// let pers = { name: "mohab", age: 20 };

// localStorage.setItem("pers", JSON.stringify(pers));
// localStorage.setItem("names", JSON.stringify(names));
// let afterReplaceJsonPers = JSON.parse(localStorage.getItem("pers"));

// console.log(afterReplaceJsonPers);
// console.log(typeof names);
// console.log(typeof localStorage.getItem("names"));

// console.log(localStorage.getItem(JSON.parse("names")));

// let afterReplaceJson = JSON.parse(localStorage.getItem("names"));
// JSON.parse(["Ahmad", "Mohammed", "Ghaith"]);
// console.log(afterReplaceJson);

// localStorage;
// sessionStorage.setItem("name", "mohammed");
// universalCookie

// console.log(window.location);

// let obj = {
//   name: "mohammed",
//   sayHello() {
//     console.log(`hello ${this.name}`);
//   },

//   sayHelloArrow() {
//     console.log(`hello ${this.name}`);
//   },
// };

// obj.sayHello();
// obj.sayHelloArrow();

// function sayHello(name = "Mira", b, ...scores) {
//   console.log(`hello ${name}`);
//   console.log(`hello ${b}`);
//   console.log(`${typeof scores}`);
//   scores.forEach((score) => {
//     console.log(score);
//   });
// }
// let arr = [];
// console.log(typeof arr);
// sayHello("Mohammed", "hassan", "total", "res");
// ? clouser
// function debounce(fn, delay = 300) {
//   let setTime;
//   return function (...args) {
//     clearTimeout(setTime);
//     setTime = setTimeout(() => {
//       console.log("args is " + args);
//       return fn(...args);
//     }, delay);
//   };
// }

// let x =10
// let inputSearch = document.getElementById("search");
// function doSearch(value) {
//   console.log("input search.value = " + value);
// }
// const debounceSearch = debounce((e) => {
//   //   console.log("input search.value = " + e.target.value);
//   doSearch(e.target.value);
// }, 400);

// inputSearch.addEventListener("keyup", debounceSearch);

// inputSearch.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

// setTimeout(() => {
//   console.log("set Time out");
// }, timeOut);

// clearTimeout(timeOut);

// let arr = [1, 2, 3, 5, 11];
// let arr = [1, 2, 3, 5, 11];
// for(let )
// let sum = arr.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// ? Throttel
// function throttel(fn, delay = 1000) {
//   let canUse = true;
//   return function (...args) {
//     if (!canUse) return;
//     fn(...args);
//     canUse = false;
//     setTimeout(() => {
//       canUse = true;
//     }, delay);
//   };
// }
// function debounce(fn, delay = 300) {
//   let setTime;
//   return function (...args) {
//     clearTimeout(setTime);
//     setTime = setTimeout(() => {
//       console.log("args is " + args);
//       return fn(...args);
//     }, delay);
//   };
// }

// window.addEventListener(
//   "resize",
//   throttel(() => {
//     console.log("resize Document");
//   }, 2000),
// );

// inputSearch.addEventListener("click", (e) => {
// inputSearch.closest(".active").append("p");
// });

// let products = [
//   {
//     id: 1,
//     name: "MIRA",
//     skills: {
//       skill1: "html",
//     },
//   },
//   { id: 2, name: "MIRA" },
//   { id: 3, name: "MIRA" },
//   { id: 4, name: "MIRA" },
// ];

// const id = 4;
// const firstItme = products.findIndex((product) => product.id == id);
// const first2Itme = products.find((product) => product.id === 1);
// const someItme = products.some((product) => product.name === "MIRA");
// const everyItme = products.every((product) => "id" in product);
// console.log(firstItme);
// console.log(first2Itme);
// console.log(someItme);
// console.log(everyItme);

// let personal = {
//   name: "Amjad",
//   age: 27,
//   email: "ex@asgd",
//   password: "123123",
// };

// let { name, age } = personal;
// console.log(name);
// console.log(age);

// let firstProduct = products[0];
// let { id, name: name2 } = firstProduct;

// let { age, name, email, password } = personal;
// console.log(products[0].id);
// console.log(personal.age);
// console.log(age);
// console.log(email);
// console.log(password);
// console.log(name);
// console.log(name2);

// let arr = [5, 6];
// let [state, setState] = arr;

// console.log(state);
// console.log(setState);

// function Button({content}) {
//     return (
//         <button class="">{procontent}</button>
//     )
// }

// let nums = [5, 15, 25];
// let [a, b, c] = nums;
// console.log(a);
// console.log(b);
// console.log(c);

// const [state, setState] = useState()

{
  /* <Button content="send" text="" isValid /> */
}

// const [state, setState] = useState()

// let products = [
//   {
//     id: 1,
//     name: "MIRA",
//     skills: {
//       skill1: "html",
//     },
//   },
//   { id: 2, name: "MIRA" },
//   { id: 3, name: "MIRA" },
//   { id: 4 },
// ];

// // ! optional chaining = ?

// let res = products[0]?.skillls?.skill1 ?? "test";
// let res1 = products[0]?.skillls?.skill1 || "test";
// console.log(res);
// console.log(res1);

// let password = "SWB@2026@@"

// let Element = document.getElementById("ele")
// let Element1 = document.querySelector("#ele")
// let Element2 = document.querySelectorAll(".ele")
// Element.innerHTML = "hello world"

// document.getElementById("headTitle").closest("[data-]").textContent

// let timeOut = setTimeout(() => {
//   console.log("set time after 1000");
// }, 5000);
// clearTimeout(timeOut);

// console.log("after setTimeOut");

// let obj = {
//   id: 1,
//   name: "MIRA",
// };

// let newObj = { ...obj, city: "Aleppo" };
// newObj.id = 2;

// console.log(obj);
// console.log(newObj);
// !! clouser
// let inputSearch = document.getElementById("search");
// function debounce(fn, delay) {
//   let timerID;
// return function (...args) {
//     clearTimeout(timerID);
//     timerID = setTimeout(() => {
//       let newObj = { ...obj, city: "Aleppo" };
//       fn(...args);
//     }, delay);
//   };
// }

// let obj = [
//   {
//     id: 1,
//     name: "MIRA",
//     sayHello() {
//       console.log(`Hello ${this.name}`);
//     },
//     sayHelloArrow: () => { console.log(`Hello ${this.name}`)},
//   },
//   {
//     id: 1,
//     name: "Mohamad",
//     sayHello() {
//       console.log(this.name);
//     },
//     sayHelloArrow: () => {},
//   },
// ];

// const start = Date.now();
// console.log(Date.now() - start);

// do {} while (Date.now() - start + 1 < 10000);
// {
//   console.log("Not DOne");
// }

// console.log("Done");

// const prom = new Promise((resolve, reject) => {
//   const ok = false;

//   if (ok) {
//     resolve();
//   } else {
//     reject(Error());
//   }
// });

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// console.log(isLoggedIN);

// let isLoggedIN = true;
// console.log(isLoggedIN);

// function name() {}

// const name = () => {};
// let personal = {
//   name: "Mira",
//   sayHello() {
//     console.log(`Hello ${this.name}`);
//     console.log(this);
//   },
//   sayHelloArrow: () => {
//     console.log(this);
//     console.log(`Hello ${this.name}`);
//   },
// };

// personal.sayHello();
// personal.sayHelloArrow();

// function sayHello(name = "Mohammed") {
//   console.log(`Hello ${name}`);
// }

// sayHello("laith");

// function sum(...nums) {
//   console.log(nums.reduce((acc, index) => acc + index, 0));
// }
// sum(1, 3, 4, 6);

// function debounce(fn, delay) {
//   let timerId;

//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// let inputSearch = document.getElementById("search");

// const doSearch = debounce((e) => {
//   console.log(e.target.value);
// }, 500);

// inputSearch.addEventListener("input", doSearch);

// !! callback Hell

// addEventListener("click", doSearch());

// let prom = new Promise((resolve, rej) => {
//   isSuccess = true;

//   if (isSuccess) {
//     resolve();
//   } else {
//     rej();
//   }
// });

// fetch().then().then(
//   () => LOADING = FALSE
// ).catch(() => LOADING = FALSE)
// let pseronal = {
//   name: "mira",
//   city: "aleppo",
//   age: 30,
//   dev: "sjkldf",
// };
// let body = {
//   age: 25,
// };

// const [form, setForm] = useState({
//   name: "",
//   city: "",
//   age: null,
//   dev: "",
// });

// fetch("https://jsonplaceholder.typicode.com/todos", {body,method: "POST", })
//   .then((res) => res.json())
//   .then((data) => setForm(data));
// .then((json) => console.log(json));

// let js = {
//   name: "",
// };

// eval(`alert("Hi")`);

// function sum() {}
// document.getElementById("search").onclick = sum();
// addEventListener("click", sum);

// !! xss = cross site scripting

// !! csp = content security policy

// console.log(`cards are : ${cards}`)
// console.log(`${cards}`)
// let todos = [,];
// console.table([
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
// ]);
// console.log(res)
// console.log(res)
// console.log(res)

// Promise.all([])
// Promise.allSettled([])

// import { sum } from "./dashboard.js";

// console.log(sum(1, 3));

// function anyThing() {}

// const prom = new Promise((resolve, rejcet) => {
//   const ok = false;
//   if (ok) {
//     resolve(console.log("success"));
//   } else {
//     rejcet(new Error("Field"));
//   }
// });
// prom();
// console.log("Hi");

// async function isValid() {
//   const ok = true;

//   if (ok) {
//     let sum = 0;
//     for (let i = 0; i <= 100000; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   } else {
//     console.log("Field");
//   }
// }
// isValid();
// console.log("bye");

// !! url , method, body
// console.log("hi");

// console.log("hiiiiiiiiiiiiiii");

// Promise.all;
// const data = Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/todossss", { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)),
//   fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)),
// fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));
// ]);

// const requests = [
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//   if (!res.ok) throw new Error(`HTTP ${res.status}`);
//   return res.json();
// });
//   fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return res.json();
//   }),
// ];

// Promise.allSettled(requests)
//   .then((allData) => console.log(allData))
//   .catch((err) => console.error("Promise.all failed:", err));

// async function getData() {
//   fetch("https://jsonplaceholder.typicode.com/todossss")
//     .then((res) => {
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       return res.json();
//     })
//     .then((data) => console.log(data));
// }

// async function getData() {
//   try {
//     loading = true
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(res);
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading = false
//   }
// fetch("https://jsonplaceholder.typicode.com/todossss")
//   .then((res) => {
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return res.json();
//   })
//   .then((data) => console.log(data)).cat

// if(){

// }
// }

// getData();

const inputSearch = document.getElementById("search");
inputSearch.className = "test";
inputSearch.id = "test";
inputSearch.textContent = "Hello World";
