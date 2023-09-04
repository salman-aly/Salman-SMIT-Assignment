// <-------Questions-01-------->

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// fullName = firstName + " " + lastName;

// console.log("Welcome " + fullName + " to Gilgit Baltistan");

// <-------Questions-02-------->

// var favMobile = prompt("Enter your favorite mobile name");

// console.log(favMobile.length);

// <-------Questions-03-------->

// var str = "Pakistani";

// var index = str.indexOf("n");

// console.log(index);

// <-------Questions-04-------->

// var str = "Hello world";

// var index = str.lastIndexOf("l");

// console.log(index);

// <-------Questions-05-------->

// var str = "Pakistani";

// var index = str[3];

// console.log(index);

// <-------Questions-06-------->

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName.concat(" " + lastName);

// console.log("Welcome " + fullName + " to Gilgit Baltistan");

// <-------Questions-07-------->

// var city="Hyderabad";

// document.write("City "+ city)
// document.write("<br/>After replacement: "+ city.replace("Hyder","Islam"))

// <-------Questions-08-------->

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";

// document.write(message.replaceAll("and", "&"));

// <-------Questions-09-------->

// var value = "472";

// document.write("Value: " + value);
// document.write("<br/>Type: " + typeof value);
// document.write("<br/>Value: " + value);
// document.write("<br/>Type: " + typeof +(value));

// <-------Questions-10-------->

// var userInput=prompt("Enter a word")

// document.write("User input: " + userInput)
// document.write("<br/>Upper case: " + userInput.toUpperCase())

// <-------Questions-11-------->

// var userInput = prompt("Enter a word");

// document.write("User input: " + userInput);
// document.write(
//   "<br/>Title case: " + userInput[0].toUpperCase() + userInput.slice(1)
// );

// <-------Questions-12-------->

// var num = 35.36;

// document.write("Number: " + num);
// document.write("<br/>Result: " + num.toString().replace(".", ""));

// <-------Questions-13-------->

// var userName = prompt("Please enter your name");
// var specialSymbole = ["@", ",", ".", "!"];
// var flag = true;

// for (var i = 0; i < specialSymbole.length; i++) {
//   if (userName.includes(specialSymbole[i])) {
//     alert("Please enter a username without special symbole.");
//     flag = false;
//     break;
//   }
// }

// if (flag) {
//   alert(" Welcome " + userName);
// }

// <-------Questions-14-------->

// var userInput = prompt(
//   "Welcome to Gilgit Bakery whats your order Ma'am | Sir"
// ).toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var flag = true;

// for (var i = 0; i < items.length; i++) {
//   if (userInput == items[i]) {
//     document.write(
//       userInput + " is availabe at index " + [i] + " in our bakery"
//     );
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   document.write("We are sorry " + userInput + " is not availbe in our bakery");
//

// <-------Questions-15-------->

// var userInput = prompt("Enter a password");

// if (userInput.length < 6) {
//   alert("Password must be at least 6 characters long.");
// } else if (/^\d/.test(userInput)) {
//   alert("Password should not start with a number.");
// } else if (!/[a-zA-Z]/.test(userInput) || !/\d/.test(userInput)) {
//   alert("Password must contain both letters and numbers.");
// } else {
//   alert("Password matches criteria");
// }

// <-------Questions-16-------->

// var university = "University of Karachi";

// for (var i = 0; i < university.length; i++) {
//   university.split();
//   console.log(university[i]);
// }

// <-------Questions-17-------->

// var userInput = prompt("Enter a letter");

// document.write("User Input: " + userInput);
// document.write("<br/>Last character of input:  " + userInput);


