// If /Else Examples
var guess = 6;
var sentence = "";

if(guess == 6) { // assigning: if it is 7 or > 6, show you guessed wrong
     sentence = "You guessed right.";
} else {
     sentence = "You guessed wrong";
}

console.log(sentence);

var guess = 4;
var sentence = "";

if (guess == 3 || guess == 5) {
    sentence = "You are close";
} else if (guess == 4) {
    sentence = "You guessed correctly" // right and skip next else
} else {
    sentence = "You guessed wrong."
};

console.log(sentence);

/**
 * Comparison Operators and Logical Operators
 */

/** Comparison Operators
 * equal to                 ==
 * strictly equal to        ===
 * not equal to             !=
 * not strictly equal to    !==
 * greater than             >
 * greater than or equal to >=
 * less than                < 
 * less than or equal to    <=
 */

/** Logical Operators
 * AND  &&
 * OR   ||
 * NOT  !
 */

// Cpmparisoon Operators

// Question 1 - equal to
var number = 7; // does seven equal to 6?
console.log("Question 1", number == 6); //false

// Question 2 - strictly equal to
var number = 7; //does this number variable which is an integer? does it strcitly equal to 7?
console.log("Question 2", number === "7"); // it is checking the data type as well so an integer and string is different.  - false

// Question 3 - greater than
var number = 6; // is 6 greater than 5?
console.log("Question 3", number > 5); //true

// Question 4 less than
var number =7; // is number 7 less than nummber 6?
console.log("Question 4", number < 6); // false

// Logical Operators
// Question 5 - AND
var pear = 7;
var apple =4; // since we have "AND", does apple equal to 7? "AND" means the whole thing needs to be true, but one is false
console.log("Question 5", pear == 7 && apple == 7); // true AND false = false

// Question 6 - OR - only need one true
var apple = 8;
var orange =2;
console.log("Question 6", apple == 6 || orange == 2); // first side is false, second side is true - true

// Question 7
var bird = 5;
console.log("Question 7", !(bird ==6)); // ! is not, so the answer is true

// .toUpperCase Methods ()
var sentence = "Weclome to toronton";
console.log(sentence.toUpperCase());

// .toLowerCase()
var sentence = "HELLO";
console.log(sentence.toLowerCase());

// .slice()
var sentence = "welcome everyone!";
console.log(sentence[0].toUpperCase() + sentence.slice(1)); // 0 is first letter and slice up from and including the second letter

// .slice 
var sentence = "Welcome to la everyone!";
console.log(sentence.slice(0,11) + sentence.slice(11,13).toUpperCase() + sentence.slice(13));

// Math.floor()
var number = 2.7654;
console.log(Math.floor(number)); // Math.floor means cut off this numbers afer the period

// Math.ceil()
var number = 2.436547;
console.log(Math.ceil(number)); // ceil will round up the number the whole number after decimal point no matter what it is, ceiling it goes up will round the entire number up to the next whole number.

// Math.round() instead of cutting any numbers, round number to the nearest number.
console.log(Math.round(7.789), Math.round(7.553), Math.round(7.234));

// Math.random()
console.log(Math.random() * 3);

console.log(Math.floor(Math.random() * 3)); //floor is the whole number and random could be any numbers

console.log(Math.floor(Math.random() * 3) + 1); // less than maximum number but plus one can reach the number
