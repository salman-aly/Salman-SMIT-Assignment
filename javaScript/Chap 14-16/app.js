// <!----------------------- <h2>Chap 14-16 Assignment</h2> --------------------->

// Question no #1
// var students = [];

// Question no #2
// students = [];

// Question no #3
// var nameString = ["Salman" , "Asif" , "Ahmed"];

// Question no #4
// var num = [12,13,14];

// Question no #5
// var boolean = [true , false];
// document.write(boolean);

// Question no #6
// var mixedArray = ["salman" , true , false , 12 , null];

// Question no #7
// document.write("<h2>Qualification</h2>");

// var qualifications = [
//   "1)" +
//     "SSC </br>" +
//     "2)" +
//     "HSC </br>" +
//     "3)" +
//     "BCS </br>" +
//     "4)" +
//     "BS </br>" +
//     "5)" +
//     "BCOM </br>" +
//     "6)" +
//     "MS </br>" +
//     "7)" +
//     "M.phil </br>" +
//     "8)" +
//     "phD </br>",
// ];

//////////////////////-----Question no #8-------/////////////////////////////////////
// var students = ["Ali", "Ahmed", "Salman"];
// var totalMark = 500;

// var score = ["350", "390", "310"];

// var Percentage = [
//   "Score of " +
//     students[0] +
//     " is: " +
//     score[0] +
//     ". Percentage " +
//     (score[0] / totalMark) * 100 +
//     "%  </br>",
// ];
// document.write(Percentage);

// var Percentage = [
//   "Score of " +
//     students[1] +
//     "is" +
//     score[1] +
//     ". Percentage" +
//     (score[1] / totalMark) * 100 +
//     "% </br>",
// ];
// document.write(Percentage);

// var Percentage = [
//   "Score of " +
//     students[2] +
//     "is" +
//     score[2] +
//     ". Percentage" +
//     (score[2] / totalMark) * 100 +
//     "%  </br>",
// ];
// document.write(Percentage);

// //////////////////////-----Question no #9-------/////////////////////////////////////

// // // Question (a)

// var colorNames =["Blue " , "Red ","Pink ","Orange ","Black ","White "];
// var userColor=prompt("Select one color which you want to add in the beginning");
// colorNames.unshift(userColor);
// document.write(colorNames);

// // Question (b)

// var colorNames =["Blue " , "Red ","Pink ","Orange ","Black ","White "];
// var userColor=prompt("Select one color which you want to add in the end");

// colorNames.push(userColor);
// document.write(colorNames);

// //  Question (c)

// var colorNames =["Blue " , "Red ","Pink ","Orange ","Black ","White "];

// var colorOne = prompt("Add your first color");
// var colorTwo = prompt("Add your second color");

// colorNames.unshift(colorOne , colorTwo);
// document.write(colorNames);

// //  Question (d)

// document.write("<h4>All color are (Blue ,Red ,Pink ,Orange ,Black ,White </h4>");

// document.write("<h4>After splice the value are below it removed the first two value</h4>");
// var colorNames =["Blue","Red ","Pink ","Orange ","Black ","White "];

// colorNames.splice(0,2);
// document.write(colorNames);

// //  Question (e)

// document.write("<h4>All color are (Blue ,Red ,Pink ,Orange ,Black ,White </h4>");

// document.write("<h4>After pop the value are removed from the last</h4>");
// var colorNames =["Blue","Red ","Pink ","Orange ","Black ","White "];

// colorNames.pop();
// document.write(colorNames);

// //  Question (f)

// var colorNames =["Blue","Red ","Pink ","Orange ","Black ","White "];

// var addColor = prompt("Enter a color name");
// var colorPostion = prompt("Add the color position");

// colorNames.splice(2,2, addColor , colorPostion);

// document.write(colorNames);

// //  Question (g)

// //////////////////////-----Question no #10-------/////////////////////////////////////

// //////////////////////-----Question no #11-------/////////////////////////////////////

// document.write(<h4>Cities List :</h4>);

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawaar"];

// // document.write(<h4>Seeleted Cities List :</h4>);

// var selectedCities = cities.slice(2, 4);
// document.write(selectedCities);

// //////////////////////-----Question no #12-------/////////////////////////////////////

// var arr = ["This ", "is ", "my ", "cat"];
// document.write("Array </br>" +arr + "</br>");

// var string = arr.join(" ");
// document.write("String </br> " +string + " </br>")

// //////////////////////-----Question no #13-------/////////////////////////////////////

// <-----------FIFO------------>

// var device = ["keyboard", "Mouse", "Printer", "Moniter"];
// document.write("Devices : </br>" + device);

// var returnValueOfDevices = device.shift();
// document.write("</br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.shift();
// document.write("</br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.shift();
// document.write("</br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.shift();
// document.write("</br> Out : </br>" + returnValueOfDevices);

// //////////////////////-----Question no #14-------/////////////////////////////////////

// <-----------LIFO------------>

// var device = ["keyboard", "Mouse", "Printer", "Moniter"];

// document.write("Devices : </br>" + device);

// var returnValueOfDevices = device.pop();
// document.write(" </br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.pop();
// document.write(" </br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.pop();
// document.write(" </br> Out : </br>" + returnValueOfDevices);

// var returnValueOfDevices = device.pop();
// document.write(" </br> Out : </br>" + returnValueOfDevices);
