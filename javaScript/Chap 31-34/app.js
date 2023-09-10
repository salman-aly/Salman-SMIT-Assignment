// <--------question-#01-------->

// var date = new Date();
// console.log(date);

// <--------question-#02-------->

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var date = new Date();
// var now = date.getMonth();
// var monthName = months[now];
// console.log("Current month : " + monthName);

// <--------question-#03-------->

// var week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

// var date = new Date();
// var weekName = date.getDay();

// var now = week[weekName];

// console.log(now);

// <--------question-#04-------->

// var week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var userInput = prompt("Enter day name").toLowerCase();

// if (userInput === "saturday" || userInput === "sunday") {
//   console.log("Its fun day");
// }

// <--------question-#05-------->

// var month = new Date();

// var now = month.getDate();

// if (now <= 15) {
//   console.log("First fifteen days of month");
// } else {
//   console.log("Last days of month");
// }

// <--------question-#06-------->

// var now = new Date();

// var past = new Date("Jan 1 1970");

// var getMiliSec = now - past;

// var getMin = getMiliSec / 60000;

// document.write(
//   "Current date : " +
//     now.toDateString() +
//     "<br/>" +
//     "Elapsed milisecond since Jan 1, 1970 : " +
//     getMiliSec +
//     "<br/>" +
//     "Elapsed Minutes since Jan 1, 1970 : " +
//     getMin
// );

// <--------question-#07-------->

// var now = new Date();

// var time = now.getTime();

// if (time > 12){
//     console.log("Its PM")
// }else{
//     console.log("Its AM")
// }

// <--------question-#08-------->

// var lastDate = new Date("dec 12 2020");

// console.log("Later Date : " + lastDate);

// <--------question-#09-------->

// var ramadan = new Date("March 23,2023");

// var now = new Date();

// var todayDate = now - ramadan;

// var days = todayDate / 86400000;

// console.log(days.toFixed(0) + " days have been passed since 1st Ramadan, 2023");

// <--------question-#10-------->

// var referenceDay = new Date("20 april 2000");

// var now = new Date();
// var dif = now - referenceDay;

// var currentSec = dif / 1000;

// console.log(
//   Math.floor(currentSec) +
//     " seconds has been passed since " +
//     referenceDay.toDateString()
// );

// <--------question-#11-------->

// var date = new Date();

// var time = date.getHours();

// date.setHours(time + 1);

// console.log("Current time and date : " + date.toDateString());

// <--------question-#12-------->

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);
// console.log(currentDate.toDateString())

// <--------question-#13-------->

// var userInput = +prompt("Enter your age");

// var now = new Date().getFullYear();

// var currentAge = now - userInput;

// console.log(currentAge.toString());