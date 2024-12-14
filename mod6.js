/* 
Joseph Tooze
Rasmussen University
Module 06 Assignment - Specific Tasks
W110/COP1801: JavaScript
James Bass
12/13/2024
*/

/* This program uses fictional dogs from animated shows to create
a constructor function to create multiple objects. It uses a for...in loop
to display each property and value of the two dog objects. Then it
displays the values in a message representing their personality.
Also, it determines whether a selected dog can talk or not. */

// Create a constructor and a method for a favorite animated dog.
function Dog(name, breed, tvProgram, note, mySound, canTalk) {
	this.name = name;
	this.breed = breed;
	this.tvProgram = tvProgram;
	this.note = note;
	this.mySound = mySound;
	this.canTalk = canTalk;
	this.myGreeting = function() {
		// Function to display personality message at end of the program.
		document.write(`<p>Hi, my name is ${name}!<br>I was in a TV show called ${tvProgram}<br>which is ${note}.<br> My character was a ${breed}<br>`);
		// Determine what to output depending on whether the dog can talk or not.
		if (canTalk === true) {
			document.write(`I can talk and I might say, "${mySound}".</p><br>`);
		}
		else {
			document.write(`I cannot talk but I might say, "${mySound}".</p><br>`);
		}
	}
}

// The function to ask and check user input for the selected name of the dog.
function checkName() {

	// Use a loop to keep prompting the user to enter a valid entry.
	do {
		dogName = prompt("Please enter the name of one of the dogs listed on this page: ").toLowerCase();
		if (!(dogName === myDogConst1.name.toLowerCase() || dogName === myDogConst2.name.toLowerCase())) {
			alert("The dog you selected doesn't exist. Please try again.");
		}
	} while (!(dogName === myDogConst1.name.toLowerCase() || dogName === myDogConst2.name.toLowerCase()));

	// Display the greeting message of the selected dog object.
	if (dogName === myDogConst1.name.toLowerCase()) {
		myDogConst1.myGreeting();
	}
	else if (dogName === myDogConst2.name.toLowerCase()) {
		myDogConst2.myGreeting();
	}
	else {
		alert("Oops, something went wrong!");
	}
}

// Create a new dog object using the defined constructor for an animated dog that speaks.
const myDogConst1 = new Dog("Brian", "Labrador Retriever", "Family Guy", "about the Griffins, a dysfunctional family", "I hate you, Peter", true);

// Create a second dog object using the defined constructor for an animated dog that does not speak.
const myDogConst2 = new Dog("Odie", "Mixed Breed", "Garfield and Friends", "about a house cat based on the comic strip by Jim Davis", "You are always getting into trouble, Garfield", false);

// Step through the properties of each dog object and display the properties and their values.
for (let key in myDogConst1) {
	if (typeof myDogConst1[key] === "function") continue;
	document.write("<p>" + key + ": " + myDogConst1[key] + "<br>");
}
document.write("</p><br>");

for (let key in myDogConst2) {
	if (typeof myDogConst2[key] === "function") continue;
	document.write("<p>" + key + ": " + myDogConst2[key] + "<br>");
}
document.write("</p><br>");

// Initialize variable to store the dog's name input by the user.
let dogName = "";

// Initialize and run a timer to delay the function to check the name input.
let timeout;
timer();

function timer() {
	timeout = setTimeout(checkName, 1000);
}