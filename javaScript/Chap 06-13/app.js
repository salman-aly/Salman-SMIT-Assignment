// <------------------chapterNo-06-09-------------------->



// Question no 1

// var a = 10;

// document.write("<br/> The value of a is: " + a);
// document.write(" <br/> .............");

// document.write("<br/>");

// document.write("<br/> The value of ++a is: " + ++a);
// document.write(" <br/>Now the value of a is :" + a);


// document.write("<br/>");

// document.write("<br/> The value of a++ is: " + a++);
// document.write(" <br/>Now the value of a is :" + a);

// document.write("<br/>");

// document.write("<br/> The value of --a is: " + --a);
// document.write(" <br/>Now the value of a is :" + a);

// document.write("<br/>");

// document.write("<br/> The value of a-- is: " + a--);
// document.write(" <br/>Now the value of a is :" + a);


// Question no 2

// var a = 2;
// var b = 1;
// document.write("</br>var a = 2;");
// document.write("</br> var b = 1;");

// document.write("</br>var result = --a - --b + ++b + b--");

// document.write("</br>--a = 1"); 
// document.write("</br>--b = 0"); 

// document.write("</br>--a - --b = " +(1 - 0));

// document.write("</br>--a - --b  + ++b + b-- = " +(1 - 0  + 1 + 1));

// document.write("</br> a is 1");
// document.write("</br> b is 0");

// document.write("</br> result is 3");


// Question no 3

// var userName = prompt("enter your name");
// document.write("Hi " + userName + " welcome");


// Question no 6

// var totalMark = 100;
// var obtainedBio = 54;
// var obtainedEng = 54;
// var obtainedmath = 48;

// var math =prompt("Enter your math total mark :");
// document.write("Subject Total mark Obtained marks Percentage </br>")
// document.write("Math ")
// document.write(" 100 ")
// document.write(obtainedmath + " ")
// document.write((obtainedmath * totalMark / 100) + " % </br>"); 

// var eng =prompt("Enter your english total mark :");
// document.write("English ")
// document.write(" 100 ")
// document.write(obtainedEng + " ")
// document.write((obtainedEng * totalMark / 100) + " % </br>");

// var bio =prompt("Enter your biology total mark :");
// document.write("Biology ")
// document.write(" 100 ")
// document.write(obtainedBio + " ")
// document.write((obtainedBio * totalMark / 100) + " % </br>");

// document.write((totalMark * 3));


// var totalObtainedMark = (obtainedBio + obtainedEng + obtainedmath);

// document.write(totalObtainedMark / ( 3 * totalMark)  * 100 + " %")






// <------------------chapterNo-09-11-------------------->

// Question no 1

// var city = prompt(" Enter your city");
// if (city==="karachi"){
//     document.write("“Welcome to city of lights”");
// }else{
//     document.write("Welcome to " + city);
// }


// Question no 2

// var gender = prompt(" Enter your gender");
// if(gender==="male"){
//     document.write("Good Morning, Sir");
// }else if(gender==="female"){
//     document.write("Good Morning, Maam");
// }


// Question no 3

// var signalColor = prompt("Enter signal color");
// if(signalColor==="Red"){
//     document.write("Must Stop");
// }else if(signalColor==="Yellow"){
//     document.write("Ready to move");
// }else if(signalColor==="Green"){
//     document.write("Move now");
// }else{
//     document.write("Enter correct signal color");
// }



// Question no 4

// var fuel = prompt("Enter current fuel in litres");
// if(fuel < 0.25){
//     document.write("“Please refill the fuel in your car”");
// }else{
//     document.write("No need to refill");
// }




// Question no 5

// Question no 5 (a)

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Question no 5 (b)

// var b = 82;
// if (++b === 83){
// alert("given condition for variable b is true");
// }

// Question no 5 (c)(i)

// var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }

// Question no 5 (c) (ii)

// var c = 13;
// if (c === 13){
//     alert("condition 2 is true");
// }

// Question no 5 (c) (iii)

// var c =12;

// if (++c < 14){
//     alert("condition 3 is true");
// }


// Question no 5 (c) (iv)

// var c = 14;

// if(c === 14){
//     alert("condition 4 is true");
// }

// Question no 5 (d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// Question no 5 (e)

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
// }

// Question no 5 (f)

// car is smaller than car b/c its depend on unicode of Character so ca of both words are same value in alphabatically but t came first in alphbet than r thats why car is smaller than cat

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Question no 6


// var mark = prompt("Enter your marks");
// if (mark >= 80){
//     document.write("Grade A-one " + " Remarks Excllents");
// }else if ( mark >= 70){
//     document.write("Grade A " + " Remarks Good");
// }else if ( mark >= 60){
//     document.write("Grade B " + " Remarks You need to improve");
// }else{
//     document.write("Grade fail " + " Remarks Sorry");
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("</br>Total marks:" + 300);
// document.write("</br>Marks obtained:" + 154);
// document.write("</br>Percentage:" + (154 / 300) * 100 + "%");
// document.write("</br>Grade:" + "C");
// document.write("</br>Remarks:" + "You need to improve");



// Question no 7

// document.write("<h1>Guess Game</h1>");
// var guessNum = prompt("Guess a lucky number");
// if (guessNum == 7){
//     document.write("Bingo! Correct Answer");
// }else if (guessNum == 6){
//     document.write("Close enough to the correct answer");
// }else if (guessNum == 8){
//     document.write("Close enough to the correct answer");
// }else{
//     document.write("Keep trying...");
// }


// Question no 8
// var num = prompt("Enter a number")
// if (num % 3 ===0){
//     document.write(num + " is divisible by 3");
// }else{
//     document.write(num + " is not divisible by 3");
// }


//  Question no 9

// var num = prompt("Enter the number");
// if (num % 2 ===0){
//     document.write (num + " is even number");
// }else {
//     document.write (num + " is odd number");
// }


//  Question no 10

// document.write("<h1>Temperature Calculator</h1>");
// var temp = prompt ("Enter temperature degree");
// if (temp > 40){
//     document.write("It is too hot outside.");
// }else if (temp > 30){
//     document.write("The Weather today is Normal.");
// }else if (temp > 20){
//     document.write("Today's Weather is cool.");
// }else if (temp > 10){
//     document.write("OMG! Today's weather is so Cool.");
// }else{
//     document.write("Enter the correct temperature");
// }


//  Question no 11


// var firstNum = +prompt("Enter The First Number");

// var secondNum = +prompt("Enter The Second Number");

// var operationSign = prompt("Enter the Value for Calculation(+,-,*,/,%)");

// var result;
// if (operationSign === "+"){
//     result = firstNum + secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "-"){
//     result = firstNum - secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "*"){
//     result = firstNum * secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "/"){
//     result = firstNum / secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "%"){
//     result = firstNum % secondNum;
//     document.write("The calculated value is " + result);
// } else{
//     document.write("Please input the right value here");
// }








// <------------------chapterNo-12-13-------------------->


//  Question no 3

// var num = prompt("Enter the number");

// if (num > 0){
//     document.write(num ," is postive");
// } else if (num < 0){
//     document.write(num ," is negtive");
// }else{
//     document.write(num ," is 0");
// }




//  Question no 4

// var alpha = prompt("Enter a single alphabet");

// if (alpha === "a" || alpha === "e" || alpha === "i" || alpha === "o" || alpha === "u"){
//     document.write("Its vowel");
// } else{
//     document.write("Its not vowel")
// }


//  Question no 5
 
// var passWord = 123;
// var passWord = prompt("Enter your passowrd");
// if (passWord === "123"){
//     alert("Correct passowrd");
// }else{
//     alert("wrong password");
// }


//  Question no 6


// var hour = 13;
// var hour = prompt("enter hour")
// if (hour > 13){
//     document.write("Good day");
// }else {
//     document.write("good morning ");
// }




