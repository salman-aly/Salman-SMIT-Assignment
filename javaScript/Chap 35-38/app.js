// >>>>>>>>>>Question No 01<<<<<<<<<<

// function value(time, date) {
//   var currentDateAndTime = new Date();
//   console.log(currentDateAndTime);
// }

// value();

// >>>>>>>>>>Question No 02<<<<<<<<<<

function fullName(fname, lname) {
  var fullName = fname + " " + lname;
  document.write("Welcome " + fullName);
}

var firstName = prompt("Enter your first name here");
var lastName = prompt("Enter your last name here");

fullName(firstName, lastName);
