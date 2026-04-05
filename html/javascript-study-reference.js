/**
 * =============================================================================
 * مرجع JavaScript للطلاب — ملف javascript-study-reference.js
 * =============================================================================
 * هذا الملف منفصل عن home.js: home.js يبقى ملف التمارين/الكود الذي تعملين عليه
 * مع الطلاب، وهذا الملف مرجع نظري وعملي مرتب مع شرح عربي لكل تعليمة.
 *
 * التحميل في الصفحة (اختياري):
 *   أضيفي في home.html قبل إغلاق body، بعد home.js إن أردتم:
 *   <script src="./javascript-study-reference.js"></script>
 *   افتراضياً لا يُحمَّل — الطلاب يفتحونه في المحرر للقراءة فقط.
 *
 * طريقة الاستخدام:
 * 1) اقرأي كل قسم أو انتقلي من الفهرس.
 * 2) الأمثلة داخل تعليقات متعددة الأسطر — أزيلي حدود التعليق لتجربة مثال واحد.
 * 3) قسم «تجربة حية» في نهاية الملف داخل تعليق — انسخيه إلى home.js إن أردتم تشغيله.
 * =============================================================================
 *
 * فهرس سريع:
 *  1) المتغيرات وأنواع البيانات
 *  2) المصفوفات Arrays
 *  3) slice مقابل splice
 *  4) الكائنات Objects
 *  5) typeof والقيم الخاصة
 *  6) الدوال Functions
 *  7) map
 *  8) filter
 *  9) forEach
 * 10) القيمة مقابل المرجع
 * 11) Object.keys / values / entries
 * 12) استدعاء دالة من داخل دالة
 * 13) الحلقات
 * 14) النصوص Strings
 * 15) Math والأرقام
 * 16) الشروط والعامل الثلاثي
 * 17) = و == و ===
 * 18) النطاق scope
 * 19–26) DOM (اختيار، محتوى، سمات، classList، أحداث، إدراج، إزالة، تنقّل)
 * 27) IIFE
 * 28) مثال return منطقي
 */

/* =============================================================================
 * 1) المتغيرات وأنواع البيانات
 * =============================================================================
 * let  : متغير يمكن إعادة تعيينه لاحقاً.
 * const: ثابت لا يمكن إعادة ربط الاسم بقيمة أخرى (لكن محتوى كائن/مصفوفة قد يتغير).
 *
 * أنواع شائعة في JavaScript:
 * - string   : نص بين علامتي اقتباس "..." أو '...' أو `...` (قالب)
 * - number   : رقم (صحيح أو عشري)
 * - boolean  : true أو false
 * - undefined: متغير مُعرَّف لكن لم تُعطَ قيمة بعد
 * - null     : «لا قيمة» مقصودة (غالباً من المبرمج)
 * - array    : مصفوفة (قائمة مرتبة)
 * - object   : كائن (أزواج مفتاح/قيمة)
 */

/*
let fName = " Mohammed"; // string — سلسلة نصية
let age = 10;            // number — رقم
let x1 = true;           // boolean — صحيح/خطأ
let notDefined;          // undefined — لم تُسند قيمة بعد
let isNull = null;       // null — عدم وجود قيمة بقصد
let arr = ["aleppo", 24, "Mohammed"]; // array — عناصر بترتيب وفهرس يبدأ من 0

let obj1 = {
  city: "Aleppo",
  age: 24,
  name: "Mohammed",
};
// الوصول لخاصية الكائن: بالنقطة أو بالأقواس
console.log(obj1.name);
console.log(arr[2]); // ثالث عنصر في المصفوفة (الفهرس 2)

let firstName = arr[0];
console.log("firstName in array is " + firstName);
*/

/* =============================================================================
 * 2) المصفوفات Arrays — قراءة وتعديل بسيط
 * =============================================================================
 * arr[i]     : العنصر عند الفهرس i
 * .length    : عدد العناصر
 * .push()    : إضافة في النهاية (يعدّل المصفوفة الأصلية)
 * .pop()     : إزالة آخر عنصر
 * .unshift() : إضافة في البداية
 * .shift()   : إزالة أول عنصر
 */

/*
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

numbers.unshift(1);   // يضيف 1 في بداية المصفوفة
numbers.push(100);    // يضيف 100 في النهاية
numbers.pop();        // يحذف آخر عنصر
console.log(numbers);

// indexOf / lastIndexOf — أول/آخر موضع لقيمة معيّنة
console.log(numbers.indexOf(30));
console.log(numbers.lastIndexOf(30));

numbers.unshift(5, 7, "Mira", true, [1, 2, 3]);
numbers.shift();
console.log(numbers.length);
console.log(numbers);
*/

/* =============================================================================
 * 3) slice مقابل splice (فرق مهم للطلاب)
 * =============================================================================
 * slice(start, end)  : يعيد جزءاً جديداً من المصفوفة دون تعديل الأصل (النهاية غير شاملة).
 * splice(start, deleteCount, ...items) : يعدّل المصفوفة الأصلية ويعيد العناصر المحذوفة.
 */

/*
let numbers = [10, 20, 30, 40, 50];
let sliceNum = numbers.slice(1, undefined); // من الفهرس 1 حتى النهاية
console.log("المصفوفة الأصلية:", numbers);
console.log("نتيجة slice:", sliceNum);

let spliceNum = numbers.splice(4, 100); // من الفهرس 4 احذف حتى نهاية المصفوفة (عملياً)
console.log("بعد splice — الأصل:", numbers);
console.log("ما أزيل بـ splice:", spliceNum);
*/

/* =============================================================================
 * 4) الكائنات Objects
 * =============================================================================
 * تخزين بيانات مرتبطة بأسماء (مفاتيح). يمكن إضافة/تعديل/حذف خصائص لاحقاً.
 */

/*
let obj = {
  name: "Mohammed",
  age: 24,
  city: "Aleppo",
};
obj.city = "Aleppo"; // تعديل خاصية
obj.age = 20;
console.log(obj);
delete obj.age; // حذف خاصية من الكائن
console.log(obj);
*/

/* =============================================================================
 * 5) typeof — معرفة نوع القيمة (مع ملاحظات شائعة)
 * =============================================================================
 * typeof null يعيد "object" — سلوك تاريخي في اللغة؛ null ليس كائناً حقيقياً.
 * انتبه: typeof 10 / 0 يُفسَّر كـ (typeof 10) / 0 لأن أولوية typeof أعلى من /
 */

/*
let isNull = null;
console.log(typeof "text"); // "string"
console.log(typeof 10);     // "number"
console.log(typeof true);   // "boolean"
console.log(typeof isNull); // "object" (ملاحظة مهمة أعلاه)
console.log(typeof 10 / 0); // NaN — بسبب ترتيب العمليات
*/

/* =============================================================================
 * 6) الدوال Functions
 * =============================================================================
 * - تعريف عادي: function name() { }
 * - سهمية (arrow): const fn = () => { }
 * - console.log: يطبع فقط ولا يُرجع قيمة للمتغير الذي يستدعي الدالة
 * - return: يُرجع قيمة لمن استدعى الدالة
 */

/*
function addProduct() {
  console.log("first function");
}

function sumPrint(a, b) {
  console.log(a + b); // طباعة فقط
}

const sumArrow = (a, b) => console.log(a + b);

sumPrint(10, 20);
sumArrow(10, 20);

function sumReturn(a, b) {
  return a + b;
}
const sumArrowReturn = (a, b) => a + b;

console.log(sumReturn(5, 15) + 10);
*/

/*
// const لا يسمح بإعادة ربط نفس الاسم:
// const sum = (a, b) => a + b;
// sum = (a, b) => a - b; // خطأ: Assignment to constant variable
*/

/* =============================================================================
 * 7) map — إنشاء مصفوفة جديدة من عناصر مُحوَّلة
 * =============================================================================
 * الأفضل: إرجاع القيمة الجديدة مباشرة دون إسناد داخل السهم إلى المعامل.
 */

/*
let numbers = [10, 20, 30];
let doubled = numbers.map((item) => item * 2);
console.log("الأصل:", numbers);
console.log("بعد المضاعفة:", doubled);

let features = [
  { id: 1, icon: "👥", title: "task 1", description: "..." },
  { id: 2, icon: "👥", title: "task 2", description: "..." },
];
features.map((item, index) => console.log(item, index));

let listHtml = features.map(
  (item) => `<div>
    <div>${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>`,
);
console.log(listHtml);
*/

/* =============================================================================
 * 8) filter — الإبقاء على عناصر تطابق شرطاً
 * =============================================================================
 */

/*
let numbers = [10, 20, 30];
console.log(numbers.filter((val) => val < 20));

let features = [
  { id: 1, title: "task 1" },
  { id: 2, title: "task 5" },
];
console.log(features.filter((feat) => feat.title === "task 1"));
console.log(features.filter((item) => item.title !== "task 5"));
*/

/* =============================================================================
 * 9) forEach — تنفيذ دالة على كل عنصر (لا تعيد مصفوفة جديدة مثل map)
 * =============================================================================
 */

/*
[1, 2, 3].forEach((n) => console.log(n * 2));
*/

/* =============================================================================
 * 10) تمرير القيم: الأرقام والنصوص «بالقيمة» — الكائنات والمصفوفات «بالمرجع»
 * =============================================================================
 * عند نسخ متغير رقمي: تغيير النسخة لا يغيّر الأصل.
 * عند نسخ مرجع كائن: المتغيران يشيران لنفس الكائن؛ تعديل أحدهما يظهر في الآخر.
 */

/*
let x = 10;
let y = x;
y = 20;
console.log(`x = ${x}, y = ${y}`); // x لم يتغير

let obj1 = { name: "ahmed", age: 25, city: "Halab" };
let obj2 = obj1;
obj2.age = 23;
console.log(obj1, obj2); // كلاهما يعرض age: 23
*/

/* =============================================================================
 * 11) Object.keys / values / entries — استخراج مفاتيح أو قيم أو أزواج [مفتاح، قيمة]
 * =============================================================================
 */

/*
let obj1 = { name: "ahmed", age: 25 };
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
*/

/* =============================================================================
 * 12) استدعاء دالة من داخل دالة (ترتيب التنفيذ)
 * =============================================================================
 */

/*
function second() {
  console.log("ثاني");
}
function first() {
  console.log("أول");
  second();
}
first();
*/

/* =============================================================================
 * 13) الحلقات
 * =============================================================================
 * for (let i = 0; i < arr.length; i++) — فهرس صريح
 * for (const item of arr)           — قيمة كل عنصر (استخدم const أو let)
 * while (شرط)                       — طالما الشرط صحيح
 * do { } while (شرط)                — يُنفَّذ مرة واحدة على الأقل ثم يفحص الشرط
 */

/*
let numbers = [10, 20, 25, 30, 35, 100];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

let i = 0;
while (i < 3) {
  console.log(numbers[i]);
  i++;
}

i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < 2);
*/

/* =============================================================================
 * 14) النصوص Strings
 * =============================================================================
 * .length — طول النص
 * .slice(start, end) — جزء من النص (يمكن استخدام فهارس سالبة)
 * .substring(start, end) — مشابه؛ السلوك مع السالب يختلف عن slice
 * .split(sep) — تحويل إلى مصفوفة حسب الفاصل
 * .join(sep) — دمج مصفوفة نصوص إلى نص واحد
 * .replace / .replaceAll — استبدال
 * .repeat(n) — تكرار النص
 * .trim() — إزالة فراغات البداية والنهاية
 * .toUpperCase() / .toLowerCase()
 */

/*
let message = "                 Hello             World!                 ";
console.log(message.length);
console.log(message.slice(0, -1));
let parts = message.split(" ");
console.log(parts);
console.log(parts.join("."));
console.log(message.trim().toUpperCase().toLowerCase());

let csv = "Hello,World,My Name,Mohammed!";
console.log(csv.split(",").join(" "));
console.log(csv.replace("h", "N"));
*/

/* =============================================================================
 * 15) أرقام عشرية و Math
 * =============================================================================
 * .toFixed(n) — تنسيق كسلسلة بعدد خانات عشرية
 * Math.ceil / floor / round — تقريب لأعلى/أسفل/أقرب صحيح
 * Math.random() — عشوائي بين 0 و 1 (غير شمول 1)
 * Math.max / min — أكبر/أصغر قيمة بين مجموعة
 * Math.pow / sqrt — أسّ وجذر
 * Math.abs — القيمة المطلقة
 */

/*
let x = 4.97436;
console.log(x.toFixed(2));
console.log(Math.ceil(5.8), Math.floor(5.8), Math.round(5.8));
console.log(Math.round(Math.random() * 1_000_000_000));
console.log(Math.max(5, 4, 7, 15), Math.min(5, 4, 7, 15, 1));
console.log(Math.pow(2, 3), Math.sqrt(4), Math.abs(-5));
*/

/* =============================================================================
 * 16) الشروط if / else if / else والعامل الثلاثي ? :
 * =============================================================================
 * && : و (كل الشروط يجب أن تكون صحيحة)
 * || : أو (أحد الشروط يكفي)
 * !  : نفي
 */

/*
let x = 155;
let y = 15;
let z = 15;

if (x >= y || x > z) {
  console.log("x large");
} else if (x !== y) {
  console.log("y is equal x");
} else {
  console.log("y large");
}

// العامل الثلاثي: شرط ? قيمة_إذا_صح : قيمة_إذا_خطأ
let label = x < y ? "أصغر" : "ليس أصغر";
console.log(label);
*/

/* =============================================================================
 * 17) المقارنة: = و == و === (مصدر أخطاء شائعة)
 * =============================================================================
 * =   : إسناد قيمة (ليس مقارنة)
 * ==  : مساواة مع تحويل نوع (قد يسبب نتائج مفاجئة: 15 == "15" → true)
 * === : مساواة صارمة (النوع والقيمة معاً) — الأفضل في معظم الحالات
 */

/*
let x = 15;
let y = "15";
console.log(x == y);  // true (بعد تحويل)
console.log(x === y); // false (أنواع مختلفة)
*/

/*
// مثال خطير: استخدام = داخل if يُسند قيمة ويغيّر x
// if ((x = y && x != z)) { ... }  // تجنّبوا هذا النمط في الشروط
*/

/* =============================================================================
 * 18) النطاق scope
 * =============================================================================
 * متغير داخل دالة: محلي — لا يُرى خارجها.
 * متغير في أعلى الملف (بدون دالة): عام في هذه الوحدة (الـ module أو السكربت).
 * var لها سلوك مختلف عن let/const (رفع hoisting ونطاق دالة) — يُفضَّل let/const حديثاً.
 */

/*
let globalVar = "The Variable is global";

function demoScope(a, b) {
  let localVar = "The Variable is local";
  console.log(globalVar);
  console.log(localVar);
  console.log(a * b);
}
demoScope(6, 5);
// console.log(localVar); // ReferenceError — غير معرّف هنا
*/

/* =============================================================================
 * 19) DOM — اختيار العناصر في الصفحة
 * =============================================================================
 * document.getElementById("id")           — عنصر واحد بالمعرّف
 * document.getElementsByClassName("x")  — مجموعة حية (HTMLCollection)
 * document.getElementsByTagName("h1")     — كل العناصر من نوع الوسم
 * document.querySelector(".class أو #id") — أول تطابق
 * document.querySelectorAll("selector")   — كل التطابقات (NodeList)
 */

/*
let byId = document.getElementById("about");
let byClass = document.getElementsByClassName("container");
let byQuery = document.querySelector("#home");
if (byQuery) byQuery.textContent = "New Home";
console.log(byId, byClass, byQuery);
*/

/* =============================================================================
 * 20) محتوى العنصر: textContent / innerText / innerHTML
 * =============================================================================
 * textContent : النص كما هو (أمين نسبياً عند عرض نص المستخدم)
 * innerHTML   : يفسّر وسوم HTML — خطر XSS إذا وضعتم نصاً من المستخدم دون تنقية
 * innerText   : النص الظاهر مع احترام الأنماط (أبطأ قليلاً)
 */

/*
let el = document.querySelector("h1");
if (el) {
  el.textContent = "عنوان آمن كنص";
}
*/

/* =============================================================================
 * 21) السمات attributes — set / get / has / remove
 * =============================================================================
 */

/*
let element = document.getElementsByTagName("h1")[0];
if (element) {
  element.setAttribute("class", "title");
  console.log(element.hasAttribute("name"));
  element.removeAttribute("name");
  console.log(element.getAttribute("name"));
}
*/

/* =============================================================================
 * 22) id و className و classList
 * =============================================================================
 * element.id = "..."           — معرّف فريد (يفضَّل عدم تكراره في الصفحة)
 * element.className = "a b"    — يستبدل كامل قائمة الأصناف كنص
 * element.classList.add/remove/toggle/contains/replace — تحكم دقيق بكل class
 */

/*
let element = document.querySelector("h1");
if (element) {
  element.id = "main-title";
  element.classList.add("memo");
  console.log(element.classList.contains("memo"));
  element.classList.remove("memo");
}
*/

/* =============================================================================
 * 23) الأحداث Events — addEventListener
 * =============================================================================
 * يربط حدثاً (click، input، ...) بدالة تُنفَّذ عند حدوثه.
 */

/*
let element = document.querySelector("h1");
if (element) {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
}
*/

/* =============================================================================
 * 24) إنشاء عناصر وإدراجها
 * =============================================================================
 * createElement — إنشاء عنصر في الذاكرة (لا يظهر حتى تضيفوه للصفحة)
 * append / appendChild — في نهاية الأب
 * prepend — في بداية الأب
 * before / after — قبل أو بعد عنصر مرجعي
 */

/*
let p = document.createElement("p");
p.textContent = "Mohammed";
document.body.append(p);
*/

/* =============================================================================
 * 25) إزالة واستبدال
 * =============================================================================
 * remove() — يزيل العنصر من DOM
 * removeChild — من الأب: parent.removeChild(child)
 * replaceChild(new, old) — من منظور الأب (واجهة أقدم)
 * replaceWith — يستبدل العنصر نفسه بعنصر آخر
 */

/*
// let oldNode = document.querySelector("p");
// oldNode?.remove();
*/

/* =============================================================================
 * 26) التنقّل في شجرة DOM
 * =============================================================================
 * parentElement — الأب كعنصر element
 * children — عناصر الأبناء فقط (بدون عقد النصوص)
 * childElementCount — عدد عناصر الأبناء
 * firstElementChild / lastElementChild — أول/آخر عنصر ابن
 * matches(selector) — هل يطابق هذا العنصر المحدد؟
 */

/*
let box = document.querySelector("#parent");
if (box) {
  console.log(box.parentElement);
  console.log(box.children);
  console.log(box.childElementCount);
  console.log(box.firstElementChild);
  console.log(box.lastElementChild);
  console.log(box.matches(".hassan"));
}
*/

/* =============================================================================
 * 27) IIFE — Immediately Invoked Function Expression
 * =============================================================================
 * دالة تُعرَّف وتُستدعى فوراً؛ مفيدة لعزل متغيرات داخل نطاق وعدم تلويث global.
 */

/*
let x = 5;
let y = 10;
let res = 0;
(function addOnce(a, b) {
  res = a + b;
})(x, y);
console.log(res);
*/

/* =============================================================================
 * 28) دوال مساعدة — التحقق من الزوجية (مثال على return منطقي)
 * =============================================================================
 */

/*
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4), isEven(5));
*/

/* =============================================================================
 * التجربة الحية (انسخيها إلى home.js أو أزيلي التعليق هنا وحمّلي هذا الملف)
 * -----------------------------------------------------------------------------
 * يتطلب في HTML: عنصر h1، ويفضّل section أو div بـ id="parent" حول العنوان
 * حتى تعمل سطور console الخاصة بـ divParent.
 *
 * (function livePageDemo() {
 *   const headTitle = document.querySelector("h1");
 *   const divParent = document.querySelector("#parent");
 *   if (!headTitle) return;
 *   headTitle.addEventListener("click", () => {
 *     headTitle.classList.toggle("active");
 *   });
 *   const newEle = document.createElement("p");
 *   newEle.textContent = "lorem";
 *   headTitle.before(newEle);
 *   if (divParent) {
 *     console.log("العنصر الأب لـ h1:", headTitle.parentElement);
 *     console.log("أبناء #parent:", divParent.children);
 *     console.log("عدد عناصر الأبناء:", divParent.childElementCount);
 *     console.log("أول عنصر ابن:", divParent.firstElementChild);
 *     console.log("آخر عنصر ابن:", divParent.lastElementChild);
 *     console.log("هل #parent يطابق .hassan؟", divParent.matches(".hassan"));
 *   } else {
 *     console.warn('لم يُعثر على #parent — أضيفي id="parent" للقسم المناسب.');
 *   }
 * })();
 * =============================================================================
 */
