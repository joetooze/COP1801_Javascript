/* 
Joseph Tooze
Rasmussen University
Module 04 Assignment - Script Creation
W110/COP1801: JavaScript
James Bass
12/01/2024
*/

// Get input from user for service amount.
let amount = Number(prompt('Please enter the dollar amount of the service (between 5.00 and 500.00):'));

// Assign new amount variable to a fixed amount with 2 decimal places to represent dollar amount.
let newAmount = amount.toFixed(2);

// Function to determine whether service amount is a valid amount (between 5.00 and 500.00).
function verifyAmount(amt) {
	if (!(amt >= 5.00 && amt <= 500.00)) {
		return false;
	}
	else {
		return true;
	}
}

// Assign returned boolean value from function, verifyAmount to variable.
let isAmountValid = verifyAmount(newAmount);

// If amount input is invalid, end the program.
if (isAmountValid === false) {
	window.alert("That is an invalid entry!");
	throw new Error("That is an invalid entry!");
}

// Get input from user for service quality.
let quality = prompt('How was the service quality (great, ok, or poor)?');

// Convert quality string to lowercase in case user uses capital letters.
let newQuality = quality.toLowerCase();

// Function to determine whether service quality input is a valid option (great, ok, or poor).
function verifyQuality(qual) {
	if (!(qual === "great" || qual === "ok" || qual === "poor")) {
		return false;
	}
	else {
		return true;
	}
}

// Assign returned boolean value from function, verifyQuality to variable.
let isQualityValid = verifyQuality(newQuality);

// If quality input is invalid, end the program.
if (isQualityValid === false) {
	window.alert("That is an invalid option!");
	throw new Error("That is an invalid option!");
}

// Function to calculate tip amount and return the value.
function calcTip(amt, qual) {
	switch(qual) {
		case "great":
			tip = amt * 0.20;
			return tip.toFixed(2);
		case "ok":
			tip = amt * 0.15;
			return tip.toFixed(2);
		case "poor":
			tip = amt * 0.10;
			return tip.toFixed(2);
	}
}

// Assign returned calculated tip from function, calcTip to variable.
let calculatedTip = calcTip(newAmount, newQuality);

// Display the service amount, the recommended tip, and the service quality to the user.
document.write(`<p>The service amount you entered is: $${newAmount}.<br>
				The service quality you entered is: ${newQuality}.<br>
				The recommended tip for this service quality is $${calculatedTip}.</p>`);