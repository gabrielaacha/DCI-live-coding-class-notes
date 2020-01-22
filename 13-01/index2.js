// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).

let guy1 = "Mark";
let guy2 = "John";

let massMark = 82;
let massJohn = 75.5;
let heightMark = 1.83;
let heightJohn = 1.88;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

// hadi solution
let markMoreCookies = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  // if statement is true than print, else, print something else
  console.log(`${guy1}'s BMI is higher than${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

// hadi solution
let markMoreCookies2 = bmiMark > bmiJohn;

if (markMoreCookies2) {
  console.log(`${guy1}'s BMI is higher than ${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

let firstName2 = "Micky";
let age = 35;

if (age < 13) {
  console.log(`${firstName2} is a child`);
}

if (age >= 13 && age <= 20) {
  console.log(`${firstName2} is a teenager`);
}

if (age >= 20 && age <= 30) {
  console.log(`${firstName2} is a young adult`);
}

if (age > 30) {
  console.log(`${firstName2} is an adult`);
}

// Hadi's solution

const firstName3 = "Peter";
const age2 = "13";
if (age2 < 13) {
  console.log(`${firstName3} is a boy`);
} else {
  if (age2 < 20) {
    console.log(`${firstName3} is a teenager`);
  } else {
    if (age2 <= 30) {
      console.log(`${firstName3} he is an adult`);
    } else {
      console.log(`is not a number`);
    }
  }
}
