// console.log(x.toFixed(4));
let old, nice, crazy;

old = true;
nice = false;
crazy = true;

console.log(!crazy); // explanation mark wil give you the opposite to this situation
console.log(1 !== 1); // if the program thinks 1 is not equal to 1 you are telling it it is
console.log(old !== crazy); // not true because old is equal to crazy
console.log(old !== nice); // true because old and crazy are ot equal

// boolean inversion with !
//console.log(crazy ! "Yeah" : "nope");

//  givenName || firstName || "ABC";

console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log(givenName || firstName || "Abc"); // if all of them ar eundefined then its undefined, if two are truthy it will take the first one to console.log

// let's do some algorithms

// Nancy's income is 500€ per week. how much does Nancy makes every year?
const nancySalary = 500 * 52;
// console.log(nancySalary)
console.log(`Nancy Salary ${nancySalary} Euro in one year`);

// the amount of hours Nancy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 what is nancy's average hour?

const nancyAverage = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(nancyAverage);
console.log(`Nancy average hours of ${nancyAverage} in a week`);

// hadis version
const nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage2 = nancyWorkingHours / 10;
console.log(
  `Nancy worked last two weeks ${nancyWorkingHours}, the average is ${nancyAverage2}`
);

// if (<boolean>){...}
console.log(true ? "yeah cool" : "nope sorry");

let a, b, c;
a = true;
b = false;
c = true;
let counter = 0;
let logIn = false;
if (a == b && c) {
  // false && true is understood as false
  console.log("Nice");
  counter = 2; // if statement is truth assign 2 to the counter and true to the logIn
  logIn = true;
} else {
  // is the statement is true then it will print Nice, otherwise it will print Not cool
  console.log("Not cool");
  counter = 3;
  logIn = false;
}

// `if` vs. ternary operator | if (true) {condition} curly brackets for the truthy situation {} if this is not true java script will ignore it
// preserved words can't be used as variables in java script, for example if
if (true) {
  console.log("yeah it is true");
}

if (false) {
  let superHero = 44; // usually variables are declared outside the curly brackets not inside
  console.log("no it's not true"); // if the declaration is nor true java script will ignore it
}

if (1 < 4 || (1 < 55 && false)) {
  console.log("yeah its true");
}

//_______________________________________________________________________________________________________________________________________________________

//EXERCISES
// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
const mathStudent = 75 + 70 + 85 + 90 + 100;
const studentAverageTest5 = mathStudent / 5;
const studentAverageTest6 = 85 * 6;

console.log(studentAverageTest6 - mathStudent);

// Expected output: Score in the sixth test: --.

let studentGrade = studentAverageTest6 - mathStudent;

console.log(`the expected score in the 6th test should be ${studentGrade}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?

const jamesAverage8 = 78 * 8;
const jamesRequiredGrade = 80 * 9;
const jamesAverage9 = jamesRequiredGrade - jamesAverage8;

console.log(jamesRequiredGrade - jamesAverage8);

if (jamesAverage9 <= 96) {
  console.log("1st class degree");
} else {
  console.log("2nd class degree");
}

//Expected output: James needs a minimum of --% to get an 80% average.

console.log(`James needs a minimum of ${jamesAverage9}% to get an 80% average`);

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let intMin = 50;
let intMax = 99;
let x = 55;
let z = 192;

if ((x >= 50 && x <= 99) || (z >= 50 && x <= 99)) {
  console.log("integer values are between 50 and 99");
}

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let intNumNum1 = 67;
let intNumNum2 = 88;
let intNumNum3 = 1921;

if (
  (intNumNum1 >= 50 && intNumNum1 <= 99) ||
  (intNumNum2 >= 50 && intNumNum2 <= 99) ||
  (intNumNum3 >= 50 && intNumNum3 <= 99)
);
console.log(true);

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a1 = 3;
let b1 = 9;
let c1 = 58;

console.log(Math.max(a1, b1, c1));

// Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.

let str1 = "Py";
let str2 = "thon";

console.log(str1 + str2);
console.log(str1 + "thon");
console.log(`${str1}thon`);

let str = "Python";
if (str.substring(0, 2) === "Py") {
  console.log(str);
}

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let intNum1 = 65;
let intNum2 = 7;
let y = intNum1 + intNum2;

if (y > 59 && y < 80) {
  console.log(65);
} else {
  console.log(80);
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let intInt1 = 3;
let intInt2 = 5;
let intDiff = Math.abs(intInt1 - intInt2);
let intSum = intInt1 + intInt2;
console.log(intDiff);

if (intSum == 8 || intDiff == 8) {
  console.log(true);
}

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let intNumero1 = 5;
let intNumero2 = 10;
let intSum2 = intNumero1 + intNumero2;

if (intNumero1 == 15 || intNumero2 == 15 || intSum2 == 15) {
  console.log(true);
}

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let intMul1 = 45;
let intMul2 = 78;

if (
  intMul1 % 7 == 0 ||
  intMul1 % 11 == 0 ||
  intMul2 % 7 == 0 ||
  intMul2 % 11 == 0
);
{
  console.log("intMul is multiple of 7 or 11");
}

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let givenInt1 = 23;
let givenInt2 = 23;
let givenIntTrip = (givenInt2 + givenInt1) * 3;

if (givenInt1 === givenInt2) {
  console.log(givenIntTrip);
}

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num1 = 3;
let numDiff = Math.abs(num1 - 19);
let numDo = numDiff * 2;
if (numDiff < 19) {
  console.log(numDo);
}

// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI

let guy1 = "Mark";
let guy2 = "John";
let massMark = 82;
let massJohn = 75.5;
let heightMark = 1.83;
let heightJohn = 1.88;
let bmiMark = massMark / heightMark;
let bmiJohn = massJohn / heightJohn;

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`${guy1}'s BMI is higher than ${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

let bmiHighest = Math.max(bmiMark, bmiJohn);
console.log(bmiHighest);

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

let firstName2 = "Micky";
let age = 15;

if (age < 13) {
  return console.log(`${firstName2} is a child`);
}
if (age >= 13 && age <= 20) {
  return console.log(`${firstName2} is a teenager`);
}
if (age >= 20 && age <= 30) {
  return console.log(`${firstName2} is a young adult`);
} else {
  return console.log(`${firstName2} is an adult`);
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

// it's same but omitting the curly brackets // technically it is the same but this is more common
const age3 = "13";
if (age3 < 13) {
  console.log("he is a boy");
} else if (age3 < 20) {
  console.log("he is a teenager");
} else if (age3 >= 30) {
  console.log("he is an adult");
} else {
  console.log("is not a number");
}
