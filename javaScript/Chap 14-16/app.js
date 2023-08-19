// <!----------------------- <h2>Chap 14-16 Assignment</h2> --------------------->

// Question no #1
// var a = [];

// Question no #2

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
// document.write(qualifications);

// Question no #8
// var studentNames = ["Salman", "Rizwan", "Kamran"];

// var totalScore = 500;
// var studentsScores = ["360", "275", "484"];

// var studentsPercentage = [
//   "Score of Salman is  360. " + "Percentage " + (360 / 500) * 100 + "% </br>",
// ];
// document.write(studentsPercentage);

// var studentsPercentage = [
//   "Score of Salman is  275. " + "Percentage " + (275 / 500) * 100 + "% </br>",
// ];
// document.write(studentsPercentage);

// var studentsPercentage = [
//   "Score of Salman is  484. " + "Percentage " + (484 / 500) * 100 + "% </br>",
// ];
// document.write(studentsPercentage);

// Question no #9

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
