//===============Recap of important javascript topics================

//===============var, let, const=====================================

var x = 0; // var is global and can be used with hoisting
let y = "3";
y = 3; // i can change the value of the variable after the semicolon
const q = 12; // is fixed, I can't change the variable after the semicolon
// sumInt; // we use camel case // no use special characters in naming the variables

//=================increment==========================================

let a = 0;
a++; // every time i write this, there will be 1 added a = a+1 or a += 1, both are exactly the same

let str = "Hi"; // it also works with strings
str += "  how are you";
console.log(str);

//=============decrement===============================================

//let b--; // a will be decreased by 1 --> same as a= a -1 or a=-1

//===============functions <name>(<parameters>){...}=============================

function sum(x, y) {
  // function - name - parameter // you can have no parameter // parameter is a value that is outside the function and is called by the function
  let z = x + y;
  return z; // you want to send the result outside of the local scope
}
console.log(sum(2, 3)); // without console.log i won't see anything // this is the function call, this will make the operation been executed

//====variables in function===============================================

function fun() {
  const num = 10;
  const num2 = 20;
  console.log(num + num2);
}

fun(); // the function cannot call itself, you always need a function call

//------------------------------------

function fun2() {
  const num3 = 10;
  const num4 = 20;
  return num3 + num4; // if you use return you have to return the values (not the function), or a backtick or something else, but not the function name
}

console.log(fun2()); // the function cannot call itself, you always need a function call

//------------------------------------

let string = "this is a long test";
console.log(string[0]);
console.log(string.substring(0, 4));
let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
let newStr2 =
  string.substring(0, 2).toUpperCase() + string.substring(1).toLowerCase();

console.log(newStr);
console.log(newStr2);

//-------------------------------------

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof arr); // we will be able to see what type of element we are dealing with

//-------------------------------------

let blue = true;
console.log(blue ? "Nice" : "Nooo"); // ternary operator, true or false

//-------------------------------------

if (1 < 10) {
  arr.push(1);
} else if (1 == 20) {
  arr.unshift(1);
} else {
  arr.push(2);
  a++;
}

//-------------------------------------

let color = "Black";

switch (color) {
  case "pink":
    arr.push(1);
    break;
  case "black":
    console.log("hi");
    break;
  default:
    // whatever other cases that were not mentioned
    a++;
    console.log("THis is not OK");
}

//=========== const <function name = (<parameters>) => {...} ====================

const div = () => {
  const you = () => {
    return 3;
  };
  return you();
};

console.log(div());

//===================Arrays====================================

const names = ["Ali", "Olga", "Nancy"];

//---------Array.includes()-------------------------
console.log(names.includes("Ali")); // it wil check the entire array and say if its there or not (true or false)
//----------Array.indexOf(<item>)------------------
console.log(names.indexOf("Ali"));

//-------Add items------------------------------
//----Arr.unshift --> it would add an index to the beginning of the array
console.log(names.unshift("Zara"));
//-----arr.push --> it would add an index at the end of the array
console.log(names.push("Zara"));

//-------Remove items------------------------
//Array.pop --> it would remove the last index
console.log(names.pop()); // I don't have to add anything
//Array.shift --> it would remove the first item
console.log(names.shift()); // i have to add the index that I wanna add

//---------Array.slice()-------------------------

//----------Array.split()------------------------
const arr1 = ["Hi", "this", "is"];
const arr2 = ["me", "writing", "you"];

//---------Array.concat()-------------------------
const arrTotal = arr1.concat(arr2);
arrTotal.push("mothafucka");
console.log(arrTotal.join(""));

//-----------Array.filter()---------------------
// creates new array
console.log(names.filter(name => name.length == 3 || name.length == 4)); // this is function without name, anonymous function, I am only calling it inside the function

//-----------Array.find()----------------------
const numbers = [1, 2, 3, 4, 5, 6];
let arrCall = numbers.find(num => num <= 1);
console.log(arrCall);

//----------Reverse()--------------------------
const str3 = "javascript";
let newRevStr = str3 // you don't need a semicolon here
  .split("")
  .reverse()
  .join("");
console.log(newRevStr);

//______________________________________________________________________________________

//==================EXERCISE==========================================================

//------------Exercise 1-----------------------------------------
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

//-----------solution--------------------------------------------
// 1. check that there are no upper cases
// 2. create empty array and empty value
// 3. then first split
// 4. create a loop
// 5. letters[i] = 4; --> condition after if (if a letter is == A, then the letter will be replaced by 4)
// 6. hackedArr.push(letters[i]); --> this is to push it into the new string
// 7. the do the same for every replacement
// 8. let result = hackedArr.join("") outside the brackets --> this will bring the letters together again
// 9. let codeStr = "Hi i am nice aaaa"; --> this is to implement the string that we wanna have replaced
// 10. console.log(hacking(codeStr)); --> this will print the first declared variable (hacking) including the declared string (codeStr)

const hacking = str => {
  let hackedArr = []; // first start with empty array,
  let toSmall = str.toLowerCase();
  let letters = toSmall.split(""); // empty double quotes because i wanna separate every word with a space
  for (let i = 0; i < letters.length; i++) {
    //it will loop until the condition is falthy
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]);
    }
  }

  let result = hackedArr.join(""); // default setting, we will replace later
  return result;
};

let codeStr = "Hi i am nice aaaa";
let codeStr2 = "javascript is cool";
let codeStr3 = "programming is fun";
console.log(hacking(codeStr));
console.log(hacking(codeStr2));
console.log(hacking(codeStr3));

//------------Exercise 2-----------------------------------------
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false
// depending on whether the number is symmetrical or not.
// NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.

// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

//------------------------solution--------------------------
// 1. turn the variable into a string
// 2. turn it into a string

function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymmetrical(1122332211));

//------------Exercise 3-----------------------------------------

// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

//-------------solution------------------------------------------

const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      camelArr.push(splitStr[0]);
      continue; // jumps to the loop again but skipping what is after the continue
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArr.push(newWord);
  }
  let result = camelArr.join("");
  return result;
};
console.log(toCamelCase("snake_log_hi"));

//-----------------Exercise 4------------------------------

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

//-----------------Solution GA------------------------------

// const pigLat = str => {
//   let firstStr = pigLat.split(" ");
//   let secondStr = firstStr[i][0].slice;
//   let vowStr = firstStr.join(" ");
//   let consStr = secondStr.join(" ");
//   let pigArr = [];
//   let endWay = "way";
//   let endAy = "ay";
//   for (let i = 0; i < vowStr.length || constStr.length; i++) {
//     if (firstStr[i][0] == "A") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "E") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "I") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "O") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "U") {
//       vowStr.concat(endWay);
//     } else {
//       firstStr.push(0);
//       consStr.concat(endAy);
//     }
//   }

//   let pigWord = vowStr.concat(endWay) || consStr.push(0).thirdStr.concat(endAy);
//   let result = pigArr.push(pigWord);
//   return result;
// };

// console.log(pigArr.push(pigWord));

//---------------------------solution 2 GA-------------------------------------------
// array with vowel

// const pigLat2 = str => {
//  let firstStr2 = pigLat.split(" ");
//  let secondStr2 = firstStr[i][0].slice;
//  let vowStr2 = firstStr.join(" ");
//  let consStr2 = secondStr.join(" ");
//  let pigArr2 = [];
//  let vowArr = ["a", "e", "i", "o", "u"];
//  let endWay2 = "way";
// let endAy2 = "ay";
//   for (let i = 0; i < vowStr2.length || constStr2.length; i++) {
//    if (firstStr2[i][0] == vowArr) {
//     vowStr2.concat(endWay2);
//   } else {
//    firstStr2.push(0);
//    consStr2.concat(endAy2);
//  }
//  }

// let pigWord2 =
//   vowStr2.concat(endWay2) || consStr2.push(0).thirdStr2.concat(endAy);

// let result2 = pigArr2.push(pigWord2);
// return result2;
// };

// console.log(result2);

//-----------------Solution Hadi------------------------------

function pigLatin(str) {
  let translation = [];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" "); // empty space as a rule
  const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0]; // take the very first character of my index
    let remainder = splitStr[i].slice(1, splitStr[i].length); // this is splitting the first character
    if (vowels.includes(firstChr.toLowerCase)) {
      let firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
    } else {
      if (i == 0) {
        let firstChrRan = remainder[0];
        let wordRem = remainder.slice(1, remainder.length); //its taking the whole word except the 1st character
        remainder = firstChrRan.toUpperCase() + firstChrRan; //
      }

      const firstChrMain = remainder + firstChr + "ay"; // igo + h + ay
      translation.push(firstChrMain);
    }
  }
  let result = translation.join(" ");
  return result;
}

const strPig = "are is the way";
console.log(pigLatin(strPig));
