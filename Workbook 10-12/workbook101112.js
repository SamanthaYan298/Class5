// 10 Comparison Operators
// 10-1-0 equal to ==
var number = 12;

console.log("Question 10-1", number == 5); // false

// 10-1-2
var number = 12;

console.log("Question 10-1-2", number == "12"); // true

// 10-1-3
var number = 12;
console.log("Question 10-1-3", number == 20); // false

// 10-1-4
var number = 12;

console.log("Question 10-1-4", number == "20"); // false

// 10-2-0 strictly equal to ===
// 10-2-1
var number = 12;

console.log("Question 10-2", number === "5"); // false

// 10-2-2
var number = 12;
console.log("Question 10-2-2", number === "12"); // false

// 10-2-3
var x = 12;

console.log("Question 10-2-3", number === 20); // false

// 10-2-4
var x = 12;

console.log("Question 10-2-4", number === 12); // true

// 10-3-0 not equal !=
// 10-3-1
var x = 12;

console.log("Question 10-3", number != "5"); // true

// 10-3-2
var x = 12;

console.log("Question 10-3-2", number != "12"); // false

// 10-3-3
var x = 12;

console.log("Question 10-3-3", number != 20); // true

// 10-3-4
var x = 12;

console.log("Question 10-3-4", number != 12); // false

// 10-4-0
// 10-4-1
var x = 15;
var y =25;

console.log("Question 10-4", x > y); // false
console.log("Question 10-4", y > x); // true

// 10-4-2
var x = 3;
var y = 5;

console.log("Question 10-4-2", x > y); // false
console.log("Question 10-4-2", y > x); // true

// 10-4-3
var x = 16;
var y = 8;

console.log("Question 10-4-3", x > y); // true
console.log("Question 10-4-3", y > x); // false

// 10-4-4
var x = 21;
var y = 21;

console.log("Question 10-4-4", x > y); // false
console.log("Question 10-4-4", y > x); // false

// 10-5-0 greater than or equal to >=
// 10-5-1
var x = 15;
var y = 25;

console.log("Question 10-5", x >= y); // false
console.log("Question 10-5", y >= x); // true

// 10-5-2
var x = 3;
var y = 5;

console.log("Question 10-5-2", x >= y); // false
console.log("Question 10-5-2", y >= x); // true

// 10-5-3
var x = 16;
var y = 8;

console.log("Question 10-5-3", x >= y); // true
console.log("Question 10-5-3", y >= x); // false

// 10-5-4
var x = 21;
var y = 21;

console.log("Question 10-5-4", x >= y); // true
console.log("Question 10-5-4", y >= x); // true

// 10-6-0 less than <
// 10-6-1
var x = 15;
var y = 25;

console.log("Question 10-6", x < y); // true
console.log("Question 10-6", y < x); // false

// 10-6-2
var x = 3;
var y = 5;

console.log("Question 10-6-2", x < y); // true
console.log("Question 10-6-2", y < x); // false

// 10-6-3
var x = 16;
var y = 8;

console.log("Question 10-6-3", x < y); // false
console.log("Question 10-6-3", y < x); // true

// 10-6-4
var x = 21;
var y = 21;

console.log("Question 10-6-4", x < y); // false
console.log("Question 10-6-4", y < x); // false

// 10-7-0 less than or equal to <=
// 10-7-1
var x = 15;
var y = 25;

console.log("Question 10-7", x <= y); // true
console.log("Question 10-7", y <= x); // false

// 10-7-2
var x = 15;
var y = 25;

console.log("Question 10-7-2", x <= y); // true
console.log("Question 10-7-2", y <= x); // false

// 10-7-3
var x = 16;
var y = 8;

console.log("Question 10-7-3", x <= y); // false
console.log("Question 10-7-3", y <= x); // true

// 10-7-4
var x = 21;
var y = 21;

console.log("Question 10-7-4", x <= y); // true
console.log("Question 10-7-4", y <= x); // true

// 11 Logical Operators
// 11-1-0 AND
var x = 10;
var y = 6;

console.log("Question 11-1", x > 5 && y < 11); // true

// 11-1-2
var x = 10;
var y = 6;

console.log("Question 11-1-2", x > 12 && y < 8); // false

// 11-1-3
var x = 10;
var y = 6;

console.log("Question 11-1-3", x > 15 && y < 8); // false

// 11-1-4
var x = 10;
var y = 6;

console.log("Question 11-1-4", x > 18 && y < 3); // false

// 11-2-0 OR
// 11-2-1
var x = 10;
var y = 6;

console.log("Question 11-2", x > 5 || y < 11); // true

// 11-2-2
var x = 10;
var y = 6;

console.log("Question 11-2-2", x > 11 || y < 11); // true

// 11-2-3
var x = 10;
var y = 6;

console.log("Question 11-2-3", x > 15 || y < 8); // true

// 11-2-4
var x = 10;
var y = 6;

console.log("Question 11-2-4", x > 18 || y < 3); // false

// 11-3-0 NOT
// 11-3-1
var x = 10;
var y = 6;

console.log("Question 11-3", x > 10 && !(y < 6)); //  false

// 11-3-2
var x = 10;
var y = 6;

console.log("Question 11-3-2", !(x > 11) && y < 11); // true

// 11-3-3 
var x = 10;
var y = 6;

console.log("Question 11-3-3", !(x > 15) || y < 8); // true

// 11-3-4
var x = 10;
var y = 6;

console.log("Question 11-3-4", x > 18 || !(y < 3)); // true

// 12 If/else
// 12-1
var x = 10;

if(x === 10) {
   console.log("It is a match");
}

// 12-2
var x = 10;
if (x > 5) {
    console.log("The value is larger than 5");
}

// 12-3
var x = 10;
var VALIDATION = 5;

if (x > VALIDATION) {
    console.log("The value is larger than " + VALIDATION);
}

// 12-4
var guess = 2;

if(guess == 2) {
    console.log("You guessed " + guess + " and you are right.");
} else {
    console.log("You guessed wrong.");
}

// 12-5
var guess = 5;

if(guess == 2) {
    console.log("You guessed " + guess + " and you are right.");
} else {
    console.log("You guessed wrong.");
}

// 12-6
var chosenValue = Math.floor(Math.random() * 3);
var sentence = "";

if (chosenValue == 0) {
    sentence = "This is the zero value.";
} else if (chosenValue == 1) {
    sentence = "This is the one value.";
} else if (chosenValue == 2){
    sentence = "This is the second value.";
} else {
    sentence = "This is not a number between 0 and 2 inclusive.";
}

console.log(sentence);

// 12-7
var date = Date;
var hour = date.getHours;
var sentence = "";

if (hour < 12) {
    sentence = "Good Morning.";
} else if (hour < 18) {
    sentence = "Good Afternoon.";
} else if (hour < 24) {
    sentence = "Good Evening.";
} else {
    sentence = "Error in time."
}

console.log(sentence);

// 12-8
var guess = 2;

if (guess == 2 || guess == 3) {
    console.log("You guessed " + guess + " and you are right.");
} else {
    console.log("You guessed wrong.");
}

// 12-9
var guessOne = 2;
var guessTwo = 3;

if (guessOne == 2 && guessTwo == 3) {
    console.log("Your first guess is " + guessOne + "." + " Your second guess is " + guessTwo + "." + " You got it right.");
} else {
    console.log("You guessed wrong.");
}

// 12-10
var guessOne = 2;
var guessTwo = Math.floor(Math.random() * 3);
var sentence = "";

if (guessOne == 2 && !(guessTwo == 1)) {
    sentence = "Your first guess is " + guessOne + "." + " Your second guess is " + guessTwo + "." + " You got it right.";
} else {
    sentence = "You guessed wrong.";
}

console.log(sentence);

// 12-11
var firstName = "Steve";
var age = 14;
var country = "Canada";
var message = "";
var MINIMUM_AGE = 16;
var LAW_IN_COUNTRY = "Canada";

if (age <= MINIMUM_AGE || country === LAW_IN_COUNTRY) {
    message = "You are able to get your licence.";
} else {
    message = "You are too young.";
}

console.log(message);

