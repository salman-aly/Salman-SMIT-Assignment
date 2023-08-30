//<-------- Question-no-01-------->

// var arr = [[], [], []];

//<-------- Question-no-02-------->

// var num = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//<-------- Question-no-03-------->

// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//<-------- Question-no-04-------->

// var num = +prompt("Enter Number to show its multiplication table");
// var length = +prompt("Enter length table");

// for (var i = 1; i <= length; i++) {
//   var multiply = num * i;
//   document.write(num + "x" + i + "=" + multiply + "<br>");
// }

//<-------- Question-no-05-------->

// var fruits = ["apple", "banana", "mango", "orange", "mango"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (var i = 0; i < fruits.length; i++) {
//   console.log("Elements at index " + i + " is " + fruits[i]);
// }

//<-------- Question-no-06-------->

// (a)
// Counting

// var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (var i = 0; i < count.length; i++) {
//   console.log(count[i]);
// }

// (b)
// Reverse Counting

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// (c)
// Even

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// (d)
// Odd

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// (e)
// Series

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i + "k");
// }

//<-------- Question-no-07-------->

// var userInput = prompt(
//   "Welcome to Gilgit Bakery. What do you want to order Sir/Madam?"
// );

// var found = false;

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (var i = 0; i < a.length; i++) {
//   if (userInput === a[i]) {
//     console.log(userInput + "is available at " + [i] + " in our bakery");
//     found = true;
//     break;
//   }
// }
// if (found === false) {
//   console.log("We are sorry " + userInput + " is not availbe in our bakery");
// }

//<-------- Question-no-08-------->

// var num = [24, 53, 78, 91, 12];
// var max = num[0];
// for (var i = 0; i < num.length; i++) {
//   if (num[i] > max) {
//     max = num[i];
//   }
// }
// console.log("Max number is " + max);

//<-------- Question-no-09-------->

// var num = [24, 53, 78, 91, 12];
// var min = num[0];
// for (var i = 0; i < num.length; i++) {
//   if (num[i] < min) {
//     min = num[i];
//   }
// }
// console.log("Min number is " + min);
