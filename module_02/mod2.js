/* 
Joseph Tooze
Rasmussen University
Module 02 - Assignment - JavaScript Program
W110/COP1801: JavaScript
James Bass
11/14/2024
*/

// Ask user for their first name and store it in variable fName
let fName = prompt("What is your name?");

// Display welcome message to user with their name
document.write(`<h1>Welcome to the JavaScript program, ${fName}!</h1>`);

// Declare constant to store the value of Pi
const piValue = 3.1415926;

// Ask user for their favorite number and store it in variable myFavNum
let myFavNum = prompt("What is your favorite number?");

// Calculate the area of a circle using the user's favorite number as the radius (r)
let myArea = piValue * myFavNum ** 2;

/* Display the output message with the contents of all variables and
the calculated area to the user */
document.write(`Hi <strong>${fName}</strong>!<br>
	Your favorite number is <strong>${myFavNum}</strong>!<br>
	If you used that number as a radius of a circle, that<br>
	circle's area would be <strong>${myArea}!</strong>`);