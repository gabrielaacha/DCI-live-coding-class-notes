// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp = 2) => {
  // you can write the value of the parameter inside the parenthesis
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

//--------------------------------------------------------------------------------

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentD(...avg) {
  // let degrees = [];
  let average = 0;
  let sum = 0;
  for (let i = 0; i < avg.length; i++) {
    sum = sum += avg[i];
    console.log(sum);
    average = sum / avg.length;
    console.log(average);

    if (average > 70 && average < 80) {
      console.log("C");
    } else if (average > 80 && average < 85) {
      console.log("B");
    } else if (average > 85 && average < 90) {
      console.log("A");
    } else if (average > 90) {
      console.log("this is an A+");
    } else {
      console.log("this is an error");
    }
  }

  return average;
}

studentD(78, 90, 67, 86, 83, 73);

//-------------------my solution-------------------------------------------------------------

// function studentDeg(array) {
//   let resultFin = [];
//   let average = (array += array[i] / array.length);
//   for (let i = 0; i < array.length; i++) {
//     if (average <= 70) {
//       resultFin.push("F");
//     } else if (average >= 70 && average <= 80) {
//       resultFin.push("C");
//     } else if (average >= 80 && average <= 85) {
//       resultFin.push("B");
//     } else if (average >= 85 && average <= 90) {
//       resultFin.push("A");
//     } else if (average >= 90) {
//       resultFin.push("A+");
//     } else {
//       resultFin.push("not a degree");
//     }

//     return resultFin;
//   }

//   grades = [89, 75, 80, 90, 83];
//   console.log(studentDeg(resultFin));
// }

//-----------------------------Hadis solution---------------------------------------------------

const studentDe = (...args) => {
  let result = "";
  let sum = 0;
  let avg = 0;
  sum = args.reduce((acc, cur) => acc + cur);
  avg = Math.floor(sum / args.length);
  //   for (let i = 0; i < args.length; i++) {
  //        sum += args[i];

  if (avg < 70) {
    result = `this student has F mark the was ${avg}`;
  } else if (avg >= 70 && avg <= 80) {
    result = `this student has C mark the was ${avg}`;
  } else if (avg > 90) {
    result = `this student has C mark the was ${avg}`;
  } else {
    result = `sorry, something went wrong`;
  }

  console.log(sum);
  return result;
};

console.log(studentDe(33, 4, 55, 66, 778, 34, 2));

//----------------------------------------------------------------------------------------------------------------

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

//-------------------Hadis solution-----------------------------------------------------------------------------------------

const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split("");
  console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    console.log();
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    console.log(remainderStr);
    if (firstTwoChr == "de") {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a vallid bank account ${strToArr[i]}`;
        counter++;
      } else if (remainderStr.lenth == 20) {
        result = `The bank account is DE${remainderStr}`;
        counter++;
      }
    }
  }

  if (counter == 0) {
    return `There was no bank account in the text`;
  }

  return result;
};

console.log("bank");
console.log(bankChecker("de my bank account is"));

//========================EXERCISES========================================================================================
// find three previous exercises and do them in a different way:
//=========================================================================================================================

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

function textUser(text) {
  let phoneArr = [];
  let phoneNr = text.toLowerCase().split(" "); // split text elements into an array
  console.log(phoneNr);
  console.log(typeof phoneNr); // type of elements
  for (let i = 0; i < phoneNr.length; i++) {
    let textToNr = parseInt(phoneNr[i]); // I turn elements of the array into numbers or NaN
    // textToNr.find(item => typeof item === "number");
    // console.log(textToNr);

    // if (typeof textToNr[i] === "number") {
    //   console.log("hello");
  }

  // console.log(textToNr.filter(elem => typeof elem === "number"));

  // console.log(textToNr);
  // if (typeof textToNr[i] === "number") {
  //   console.log(textToNr[i]);
}

//   if () {
//     // is it a number? // example found online : console.log(arr.filter(item => typeof item === 'number'));
//     phoneArr.push(phoneNr[i]);
//     console.log(phoneArr);
//   }
// }

// if (
//   phoneNr.length == 7 && // does it have 7 digits?
//   phoneArr[0] == "0" && // does it start with 030?
//   phoneArr[1] == "3" &&
//   phoneArr[2] == "0"
// ) {
//   console.log(phoneArr);
// } else {
//   console.log("this is not a number");
// }

//return phoneNr;

textUser("Hello my number is 015773941536");

//--------------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function strAndWord(strand, word) {
  let wordStrand = 0;
  let wholeWord = 0;
  let strandToArr = strand.toLowerCase().slice("");
  console.log(strandToArr);
  let wordToArr = word.toLowerCase().slice("");
  console.log(wordToArr);
  // for (let i = 0; i < wordToArr.length; i++) {
  //   if (strandToArr.length == wordToArr[i][0]) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }
}

strAndWord("be", "Belgium");

// //--------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

function userData(name, age, street, ...hobbies) {
  let userName = 0;
  let userAge = 0;
  let userHobbies = "";
  console.log(
    `Hello ${name}, ${age} years old, living in ${street}. You declared your hobbies are ${hobbies}`
  );

  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i] == "dance" || hobbies[i] == "party") {
      console.log("you are cool");
    }
  }
}

userData("peter", 58, "mahlower str", "dance", "walk", "cook");

//--------------------------------------------------------------------------------------------------------------------------

// Write a function will give the alphabetical order for a passed character
// i.e.  A -> 1
// B -> 2

function alphaBet() {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var letterPosition = alphabet.indexOf(letter) + 1;
  console.log(letterPosition);
}
let letter = "z";
alphaBet(letter);

//--------------------------------------------------------------------------------------------------------------------

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 6;

console.log(
  "The character code " +
    sentence.charCodeAt(index) +
    " is equal to " +
    sentence.charAt(index)
);
// expected output: "The character code 113 is equal to q"

//--------------------------------------------------------------------------------------------------------------------
