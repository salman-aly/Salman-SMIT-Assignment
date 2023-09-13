// >>>>>>>>>>Question No 01<<<<<<<<<<

// function value(time, date) {
//   var currentDateAndTime = new Date();
//   console.log(currentDateAndTime);
// }

// value();

// >>>>>>>>>>Question No 02<<<<<<<<<<

// var firstName = prompt("Enter your first name here");
// var lastName = prompt("Enter your last name here");

// function fullName(fname, lname) {
//   var fullName = fname + " " + lname;
//   document.write("Welcome " + fullName);
// }

// fullName(firstName, lastName);

// >>>>>>>>>>Question No 03<<<<<<<<<<

// var number1 = +prompt("Enter first number");
// var number2 = +prompt("Enter second number");

// function add(num1, num2) {
//   var result = num1 + num2;
//   document.write("The total is : " + result);
// }

// add(number1, number2);

// >>>>>>>>>>Question No 04<<<<<<<<<<

// var userInput1 = +prompt("Enter num 1");
// var userInput2 = +prompt("Enter num 2");

// var userValue = prompt("Enter the value e.g -,+,x,/");

// function cal(userInput1, userInput2, userValue) {
//   if (userValue === "-") {
//     return userInput1 - userInput2;
//   } else if (userValue === "+") {
//     return userInput1 + userInput2;
//   } else if (userValue === "x") {
//     return userInput1 * userInput2;
//   } else if (userValue === "/") {
//     return userInput1 / userInput2;
//   } else {
//     return "Enter a valid value";
//   }
// }

// var result = cal(userInput1, userInput2, userValue);

// console.log("The result is :" + result);

// >>>>>>>>>>Question No 05<<<<<<<<<<

// var userInput = +prompt("Enter a num to find its square");

// function square(userInput) {
//   var cal = userInput * userInput;
//   console.log("The square of " + userInput + " is " + cal);
// }

// square(userInput);

// >>>>>>>>>>Question No 06<<<<<<<<<<

// var userInput = +prompt("Enter a num to find its factorial");
// var result = 1;

// function fac(userInput) {
//   for (var i = 1; i <= userInput; i++) {
//     result *= i;
//   }
// }

// fac(userInput);

// console.log("The factorial value of " + userInput + " is " + result);

// >>>>>>>>>>Question No 07<<<<<<<<<<

// >>>>>>>>>>Question No 08<<<<<<<<<<

// >>>>>>>>>>Question No 09<<<<<<<<<<

// var height = +prompt("Enter height");
// var width = +prompt("Enter width");

// function area(height, width) {
//   var area = height * width;
//   document.write("The area of : " + height + " x" + width + " is " + area);
// }

// //argument with variable
// area(height, width);
// //argument with value
// area(10, 40);

// >>>>>>>>>>Question No 0<<<<<<<<<<

// function findLongestWord(str) {
//   var word = str.split(" ");
//   var longestWord = "";

//   for (var i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length) {
//       longestWord = word[i];
//     }
//   }
//   console.log("The longest word is : " + longestWord);
// }

// findLongestWord("Web Development Tutorial");
