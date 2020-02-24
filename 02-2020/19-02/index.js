//============================exercises==30-01-20===================================================

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

//..................................................................................................

//============================exercises==29-01-20===================================================

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

//..................................................................................................

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

//..................................................................................................

//============================exercises==28-01-20===================================================

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false
console.log(
  "-------------------------------version-1-----------------------------------------------"
);
function xO(str) {
  let counterO = 0;
  let counterX = 0;
  let counter = 0;
  let splitStr = str.toLowerCase().split("");
  // console.log(splitStr);
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == "o") {
      counterO++;
      // console.log(counterO);
    } else if (splitStr[i] === "x") {
      counterX++;
      // console.log(counterX);
    } else {
      counter++;
    }
  }

  if (counterX === counterO) {
    return true;
  } else {
    return false;
  }
}

console.log(xO("ooxx"));
console.log(xO("xooxx"));
console.log(xO("ooxXm"));
console.log(xO("zpzpzpp"));
console.log(xO("zzoo"));

//.....................................version 2......................................................
console.log(
  "-------------------------------version-2-----------------------------------------------"
);
function xO2(str) {
  let splitStr = str.toLowerCase().split("");
  let o = splitStr.filter(letter => letter == "o").length;
  let x = splitStr.filter(letter => letter == "x").length;

  if (x === o) {
    return true;
  } else {
    return false;
  }
}

console.log(xO2("ooxx")); // true
console.log(xO2("xooxx")); // false
console.log(xO2("ooxXm")); // true
console.log(xO2("zpzpzpp")); // true
console.log(xO2("zzoo")); // false

// resources: https://stackoverflow.com/questions/6120931/how-to-count-the-number-of-certain-element-in-an-array

//..........................................version 3................................................
console.log(
  "-------------------------------version-3-----------------------------------------------"
);
function xO3(str) {
  let splitStr = str.toLowerCase().split("");
  let o = splitStr.map(letter => letter == "o");
  let x = splitStr.map(letter => letter == "x");
  let z = o.filter(state => state == true).length;
  let y = x.filter(state => state == true).length;
  return z === y ? true : false;
}

console.log(xO3("ooxx")); // true
console.log(xO3("xooxx")); // false
console.log(xO3("ooxXm")); // true
console.log(xO3("zpzpzpp")); // true
console.log(xO3("zzoo")); // false

//..................................................................................................

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// @ and . not at the beginning and not at the end but they are in the string

//..................................................................................................
