/* 
Joseph Tooze
Rasmussen University
Module 03 - Assignment - JavaScript Program Basics
W110/COP1801: JavaScript
James Bass
11/21/2024
*/


// Count through loop from 0 to 10 and display if count is even or odd.
for (let count = 0; count <= 10; count++) {
	if (count % 2 === 0) {
		document.write(`Count ${count} is even.<br>`);
	}
	else {
		document.write(`Count ${count} is odd.<br>`);
	}
}

document.write("<br>");

// Ask user for a number between 5 and 20.
let myNum = prompt("Enter a number between 5 and 20.");

// Initialize counter to 1.
count = 1;

/* Step through do-while loop and display count value until it
reaches number chosen by user. */
do {
	document.write(`Count ${count}<br>`);
	count++;
} while (count <= myNum);

// Define variable to store text output.
let text = "";

// Define array for subjects and store the subject names in it.
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Step through array contents and calls a function for each subject.
subjects.forEach(myFunction);

// Function that creates and appends a string of all the subject names.
function myFunction(iValue, index) {
	if (index < subjects.length - 1) {
		text += iValue + ", ";
	}
	else {
		text += iValue;
	}
}

// Display the contents of the resulting string variable, text.
document.write("<br>" + text + "<br>");