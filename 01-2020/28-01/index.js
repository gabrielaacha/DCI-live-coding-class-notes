//================================exercises(mix)==============================================================================

// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

function str(string) {
  if (string.includes("JavaScript")) {
    console.log("I know it's crazy 😉");
  }
}

let str2 = "Python, JavaScript, C++, CSS";
str(str2);

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that calculates the user age e.g. 2000 -> 20. (Date().getFullYear);

// function userAge(userNum2) {
//   let currentYear = 2020;
//   let resAge = 0;
//   let userNum2 = currentYear - userInput;
//   userAr.push(resAge);
//   return resAge;
// }

// const userInput = 2000;
// console.log(userAge(userNum2));

//------------------Hadis solution--------------------------------------------------------------------------------------------

function age(num) {
  let year = new Date().getFullYear();
  let userAge = year - num;
  return num < year && num > 1900
    ? `${userAge} years old`
    : `Please enter a valid year`;
}
console.log(age(1940));
console.log(age(2200));

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const seasonWinter = ["December", "January", "February"];

const seasonSpring = ["March", "April", "May"];

const seasonSummer = ["June", "July", "August"];

const seasonAutumn = ["September", "October", "November"];

function userMonth(userText) {
  let result = "";
  switch (userText) {
    case January:
      result = monthNames[0];
      break;
    case February:
      result = monthNames[1];
      break;
    case March:
      result = monthNames[2];
      break;
    case April:
      result = monthNames[3];
      break;
    case May:
      result = monthNames[4];
      break;
    case June:
      result = monthNames[5];
      break;
    case July:
      result = monthNames[6];
      break;
    case August:
      result = monthNames[7];
      break;
    case September:
      result = monthNames[8];
      break;
    case October:
      result = monthNames[9];
      break;
    case November:
      result = monthNames[10];
      break;
    case December:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a month");
  }
  return result;
}

let userText = "March";

if ((userMonth = seasonSpring)) {
  console.log(userMonth + ", Spring");
} else if ((userMonth = seasonSummer)) {
  console.log(userMonth + ", Summer");
} else if ((userMonth = seasonAutumn)) {
  console.log(userMonth + ", Autumn");
} else if ((userMonth = seasonWinter)) {
  console.log(userMonth + ", Winter");
} else {
  console.log(userMonth + ", not a season");
}

//----------------------------------------------------------------------------------------------------------------------------

const seasonWinter2 = ["", "December", "January", "February"];
const seasonSpring2 = ["", "March", "April", "May"];
const seasonSummer2 = ["", "June", "July", "August"];
const seasonAutumn2 = ["", "September", "October", "November"];

let arrMonth = seasonAutumn2 + seasonSpring2 + seasonWinter2 + seasonSummer2;

console.log(arrMonth);

// function userMonth2(userEntry2) {
//     let result = "";
//     let userArray = [];
//     for (let i=0; i < arrMonth.length; i++) {
//       if (userEntry2.includes(seasonWinter2)) {
//           console.log(seasonWinter2[i] + ", Winter");
//         } else if (userEntry2.includes(seasonSummer2)) {
//             console.log(seasonSummer2[i] + ", Summer");
//         } else if (userEntry2.includes(seasonAutumn2)){
//             console.log(seasonAutumn2[i] + ", Autumn")
//         } else if (userEntry2.includes(seasonSpring2)){
//             console.log(seasonSpring2[i] + " , Spring")
//         } else {
//             console.log("this is not a month");
//         }

//         return result;
//     }

//   userEntry2 = [March];
//   userMonth(userEntry2);

//----------------------------------------------------------------------------------------------------------------------------

const monthNames2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function monthSeason(userText2) {
  let result = [];
  let winter = monthNames2[i] + ", Winter";
  let summer = monthNames2[i] + ", Summer";
  let spring = monthNames2[i] + ", Spring";
  let autumn = monthNames2[i] + ", Autumn";
  for (let i = 0; i < monthNames2.length; i++) {
    if (userText2[i][0] || userText2[i][1] || userText2[i][2]) {
      winter.push(result);
    } else if (userText2[i][3] || userText2[i][4] || userText2[i][5]) {
      result.push(monthNames2[i] + ", Spring");
    } else if (userText2[i][6] || userText2[i][7] || userText2[i][8]) {
      result.push(monthNames2[i] + ", Summer");
    } else if (userText2[i][9] || userText2[i][10] || userText2[i][11]) {
      result.push(monthNames2[i] + ", Autumn");
    } else {
      result.push("this is not a month");
    }
  }

  return result;
}

console.log(monthSeason("February"));

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function dictionary() {}
let arrDic = [];

//-----------------------------------------------------------------------------------------------------------------------------

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofor = who => {
  return `Two for me and one for ${who}`;
};

console.log(twofor("Ali")); // -> "Two for me and one for Ali"
console.log(twofor()); // -> "Two for me and one for you"

//-----------------------------------------------------------------------------------------------------------------------------

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp) => {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

//------------------------------------------------------------------------------------------------------------------------------------

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentDeg(array) {
  // let resultFin = [];
  let average = (array += grades[i] / grades[i].length);
  for (let i = 0; i < array.length; i++) {
    if (average <= 70) {
      resultFin.push("F");
    } else if (average >= 70 && average <= 80) {
      resultFin.push("C");
    } else if (average >= 80 && average <= 85) {
      resultFin.push("B");
    } else if (average >= 85 && average <= 90) {
      resultFin.push("A");
    } else if (average >= 90) {
      resultFin.push("A+");
    } else {
      resultFin.push("not a degree");
    }

    return resultFin;
  }

  grades = [89, 75, 80, 90, 83];
  console.log(studentDeg(resultFin));
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

// function hobbies(hobAr) {
//   let userData = ["name", "age", "address", ..."hobbies"];
//   // let result = 0;
//   for (i = 0; i < hobAr.length; i++) {
//     userData.map(hobAr);
//     console.log(hobAr);
//   }
// }

// let userInfo = ["gabriela", "34", "selchower", "swimming", "yoga", "read"];
// hobbies(userInfo);

// if (activities.includes(dance || party)) {
//   console.log("you are cool");
// }

//=========================more exercises===========================================================================

// Count Occurrences. Create a function that accepts two arguments: a string and a letter.
// The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

function countOccurrences(string, letter) {
  let amountChr = "";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
      console.log(counter);
    }
  }
  return counter;
}

countOccurrences("this is a string", "s");

//-------------------------------------------------------------------------------------------------------------------------------------

// Create a function which calculates how old a dog is in doggie years.
// The function should accept one argument that is the puppy’s age in human years.
// Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

function dogAge(x) {
  let result = 0;
  let dogYear = x * 7;
  console.log(`my dog is ${dogYear} years old`);
}

dogAge(5);

//-------------------------------------------------------------------------------------------------------------------------------------

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack.
// The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e. calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

function favSnack(age, nutsPacks) {
  let result = 0;
  let maxAge = 89;
  const nutsForLife = nutsPacks * 365 * (maxAge - age);
  console.log(
    `I will need ${nutsForLife} packets of nuts to last until I am 98`
  );
}

favSnack(20, 5);

//-------------------------------------------------------------------------------------------------------------------------------------

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// --> Total number of slices. --> slices
// --> Number of recipients. --> recipients
// --> How many slices each person gets. --> person
// Examples:
// --> equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// --> equalSlices(8, 3, 2) ➞ true
// --> equalSlices(8, 3, 3) ➞ false
// --> equalSlices(24, 12, 2) ➞ true

function equalSlices(slices, recipients, person) {
  let totalSlices = slices * recipients;
  if (totalSlices == person) {
    console.log("true");
  } else if (totalSlices < person) {
    console.log("false");
  } else {
    console.log("something else");
  }
}

equalSlices(8, 3, 29);

//-------------------------------------------------------------------------------------------------------------------------------------

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

function exesAndOs(string) {
  let stringXO = string.toLowerCase();
  let splitStr = stringXO.split("");
  console.log(splitStr);
  let x = 0;
  let o = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == "o") {
      o++;
    } else if (splitStr[i] == "x") {
      x++;
    }
  }

  if (x == o) {
    console.log("true");
  } else if (x > o || x < o) {
    console.log("false");
  }
}
let XO = "ooxxo";
exesAndOs(XO);

//-------------------------------------------------------------------------------------------------------------------------------------

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// @ and . not at the beginning and not at the end but they are in the string

function emailVal(str) {
  let x = str.includes("@", ".");
  if (
    x[0] == "@" ||
    x[0] == "." ||
    x.length - 1 == "@" ||
    x.length - 1 == "."
  ) {
    console.log("this email is invalid");
  } else {
    console.log("this email is valid");
  }
}

let emailStr = "hello";
emailVal(emailStr);

//-------------------------------------------------------------------------------------------------------------------------------------
