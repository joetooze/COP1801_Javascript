/* 
Joseph Tooze
Rasmussen University
Module 05 Assignment - Using JavaScript to Create Objects
W110/COP1801: JavaScript
James Bass
12/06/2024
*/

/* This program uses a fictional dog from an animated show to create
a literal object, a constructor, and a method to the object. Then it
displays the values in a message representing their personality. */

// Create a literal object of a favorite animated dog.
let myDog = {
	name: "Scooby-Doo",
	breed: "Great Dane",
	tvProgram: "Scooby-Doo Where Are You",
	note: "which is about a big dog and several teenage humans",
	mySound: "you will laugh because I have a funny voice"
};

// Display the object values in a message representing the dog's personality.
document.write(`<p>Hi, my name is ${myDog.name}!<br>I was in a TV show called ${myDog.tvProgram}, ${myDog.note}.<br> My character was a ${myDog.breed} and when I speak, ${myDog.mySound}.</p><br>`);

// Create a constructor and a method for a favorite animated dog
function Dog(name, breed, tvProgram, note, mySound, canTalk) {
	this.name = name;
	this.breed = breed;
	this.tvProgram = tvProgram;
	this.note = note;
	this.mySound = mySound;
	this.canTalk = canTalk;
	this.myGreeting = function() {
		document.write(`<p>Hi, my name is ${name}!<br>I was in a TV show called ${tvProgram}, ${note}.<br>`);
		if (canTalk === true) {
			document.write(`My character was a ${breed} and when I speak, ${mySound}.</p><br>`);
		}
		else {
			document.write(`My character was a ${breed} and ${mySound}.</p><br>`);
		}
	}
}

// Create a new dog object using the defined constructor for an animated dog that speaks
const myDogConst = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo Where Are You", "which is about a big dog and several teenage humans", "you will laugh because I have a funny voice", true);

// Use the object's myGreeting function to display the object's greeting message
myDogConst.myGreeting();

// Create a second dog object using the defined constructor for an animated dog that does not speak
const myDogConst2 = new Dog("Snoopy", "Beagle", "I want a dog for Christmas, Charlie Brown", "which is based on the comic strip, Peanuts", "I cannot speak", false);

myDogConst2.myGreeting();