//==============================Exercise-230120==================================================================================

// Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// Extra Practice
// Preserve proper capitalization as in the examples below.

// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.” // 1st letter goes to the end of the word and then + "ay" or "way" if word starts with vowel
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

//============================================================================================================================

//-----------------Solution Hadi----------------------------------------------------------------------------------------------

function pigLatin(str) {
  let translation = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" "); // empty space as a rule // divides every word
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0]; // take the very first character of my index // b anana
    console.log(splitStr + " This is split arr"); // anana
    let remainder = splitStr[i].slice(1, splitStr[i].length); // this is splitting the first character
    console.log(remainder + "remainder");
    if (vowels.includes(firstChr)) {
      const firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
    } else {
      if (i == 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      const newString = remainder + firstChr + "ay";
      translation.push(newString);
      console.log(translation);
    }
  }
  let result = translation.join(" ");
  return result;
}
const strPig = "Banana the is";
console.log(pigLatin(strPig));

//-----------------------------------------------------------------------------------------------------------------------------

// tip: whenever we don't know whats going on console log

//-----------------------------------------------------------------------------------------------------------------------------

//==============================Exercises-recap-functions==================================================================================

// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

// this is the old school way:

// function mul(x, y) {
//   // let result = x * y;
//   console.log(x, y);
// }
// console.log(mul(2, 4));

function multiplyTwoNumbers(a, b) {
  let result = a * b;
  console.log(result);
}

multiplyTwoNumbers(2, 3);

//-----------------------------------------------------------------------------------------------------------------------------

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

const multiply = function(x, y) {
  console.log(x * y);
};

multiply(4, 7);
//-----------------------------------------------------------------------------------------------------------------------------

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

// 3rd way to formulate functions

const mul = (x, y) => {
  return x * y; // every function shall have return but its not must
};

console.log(mul(4, 9));

//-----------------------------------------------------------------------------------------------------------------------------

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

//____version1

function div(x, y) {
  console.log(x % y);
}

//____version2

const div1 = function(a, b) {
  console.log(a % b);
};

//____version3

const div2 = (a, b) => a % b;

div(4, 2);
div(7, 4);
div(3, 5);

//-----------------------------------------------------------------------------------------------------------------------------

// Print Exponential Values
// --> Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// --> For example if we have function(3, 5) The function should print 3 9 27 81 243.
// --> Prints 5 exponential values of 3.
// --> function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

// function exp(x, y) {
//   let expNum = [];
//   result = 0;
//   for (i = 0; i < y; i++);
// }
// expNum = typeof exp;
// console.log(expNum);
// // if ((expNum = number)) {
// //   console.log(exp(Math.pow(x, x)));
// // } else {
// //   console.log(`${exp} is not a number`);
// // }
// const newStr2 = (expNum.length = y);
// expNum.push(newStr2);
// // return result;
// // console.log(exp(3, 8));

//----------------Hadis-------------------------------------------------------------------------------------------------------

function printValue(x, y) {
  // never write name of the function inside the function, only the parameter
  if (typeof x == "number" && typeof y == "number") {
    // console.log(true);
    let result = 1;
    let values = ""; // gives  order to the output
    for (let i = 0; i < y; i++) {
      result *= x; // you can use math.pow
      values += `${result} `; // to print the numbers in a presentable situation, important to make the space otherwise the will get printed together
    }
    return values;
  } else {
    return "One of your vars is not a number";
  }
}

console.log(printValue(4, 3));

//-----------------------------------------------------------------------------------------------------------------------------

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store
// your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.

// function printFavoriteFruit(favFruit) {
//   console.log(favFruit);
// }

// favFruit("pear");

//----------------Hadis-------------------------------------------------------------------------------------------------------

let fruit = "Apple";
function printFavoriteFruit() {
  fruit = "Banana";
  console.log(`my favorite fruit is ${fruit}`);
}

printFavoriteFruit();

//-----------------------------------------------------------------------------------------------------------------------------

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible?
// Why/Why not? Comment your answer in the index.js file.

function exponent(x, y) {
  for (i = 0; i < y; i++);
  console.log(exponent);
}

exponent(2, 5);

//----------------Hadis-------------------------------------------------------------------------------------------------------

function exponent(staterNum, exponent) {
  let result = 0;
  let multi = staterNum * staterNum;
  for (let i = 0; i < exponent; i++) {
    result += multi; // variable multiplied by itself
  }

  return result;
}

console.log(exponent(2, 4));

//=======================FUNCTIONS============================================================================================

//-----spread syntax (...) [...array]---------------------------------------------------------------

let array = [1, 3, 45, 6];
let copyArray = [...array]; // you can also write just = array but when working with objects better this way
console.log(copyArray);

//---------------------------------------------------------------------------------------------------

function sum(...args) {
  // stands for arguments
  let array = args; // better to use args than x

  console.log(array);
}
sum(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);

//---------------------------------------------------------------------------------------------------

// add all the number of the array

function sum(...args) {
  // stands for arguments
  let array = args; // better to use args than x
  let result = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(array.reduce(reducer));
  return `the sum is §{result}`;
}
sum(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);
sum(7, 88, 98, 9);

//---------------------------------------------------------------------------------------------------

function sum2(...args) {
  // you use this whenever you don't know what the length of the array is
  // stands for arguments
  let array2 = args; // better to use args than x
  let result2 = 0;
  const reducer2 = (a, b) => a + b;
  console.log(array2.reduce(reducer2));
  return `the sum is §{result}`;
}
sum2(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);
sum2(7, 88, 98, 9);

//---------------------------------------------------------------------------------------------------

// when i have array i need loop
function sum3(...args) {
  // stands for arguments
  let array3 = args; // better to use args than x
  let result3 = 0;
  for (let i = 0; i < array.length; i++) {
    result3 += array[i];
  }
  return `the sum is ${result3}`;
}
console.log(sum3(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8));
console.log(sum3(7, 88, 98, 9));

// function that will receive unknown amount of VREyeParameters, console log how many parameters the user entered:

function sum4(...args) {
  console.log(...args);
}
function sum5(...args) {
  let array4 = args;
  for (var i = 0; i < array4.length; i++) {
    console.log(array4[i]);
  }
}

//----Hadi-----------------------------------------------------------------------

const howManyArgs = args => console.log(args.length);
howManyArgs(23, 54, 32, 123);

//------------------------------self invoquing function-----------------------------

(function add() {
  console.log("Hi");
})();

//------------------------------------------------------------------------------------
