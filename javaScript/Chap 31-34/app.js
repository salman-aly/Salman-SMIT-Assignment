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

var now = new Date();

var past = new Date("Jan 1 1970");

var getMiliSec = now - past;

var getMin = getMiliSec / 60000;

document.write(
  "Current date : " +
    now.toDateString() +
    "<br/>" +
    "Elapsed milisecond since Jan 1, 1970 : " +
    getMiliSec +
    "<br/>" +
    "Elapsed Minutes since Jan 1, 1970 : " +
    getMin
);
