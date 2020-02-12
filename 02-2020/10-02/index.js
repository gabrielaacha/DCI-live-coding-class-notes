const objects = [
  {
    name: "Ali",
    lastName: "G"
  },

  {
    name: "Olga",
    lastName: "xs",
    printOut: function() {
      console.log("this is a print out");
    }
  },

  { name: "Nancy", lastName: "Arns" }
];

objects[1].printOut(); // dot notation:
objects[1]["printOut"](); //------second way to call --> bracket notation

// clones vs. references
// simple values: numbers, boolean,
let str = " How are you"; // primitive value
let newStr = str; // cloning, copy of the primitive value
str = "something else"; //
console.log(newStr);
// its like having two variables, str and newStr

let num = 222;
let newNum = num;
console.log(newNum);

//with array
const names = ["Ali", "Olga", "Nancy", "Zain"];
let newArr = names;
console.log(newArr);
newArr[1] = "New";
console.log(newArr);

//with objects
const car = {
  name: "ford",
  year: "2020",
  color: "red"
};
const newObject = car;
newObject.name = "BMW";
console.log(car.name);

//..................cloning with spread operator ... (shallow copy) // this would copy the whole array..................................................................
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr]; // this is how to clone array
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);

//...................cloning array with .concat() // this would copy the whole array..........................................................
let newNames2 = [].concat(namesArr); // its like a trick, usually you would assign an array to the first brackets but in this case you don''t so js would copy the array instead of concatenating

//....................cloning with .slice();..................................................................................................
let newNames3 = namesArr.slice(0); // i wanna start from the very first element, there can be a variable in the brackets or other numbers
console.log(newNames3);

//--------------------shallow copy using .assign()..............................................................................................

const newObject2 = Object.assign(car);
const newObject3 = { ...car }; // spread operator BFF

// infinity function call // NEVER DO
// function one()
// {
//     two();
// }
// function two (){
//     one();
// }

//.............Recursion...............................................................................................
// it creates a function that calls itself and stops calling itself to avoid the infinite loop
const factorial = function(num) {
  // factorial is multiplying every number until arriving to the num in the parameter
  //console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1); // this  would create an infinity loop, this has to be avoided
};
console.log(factorial(5)); // expected outcome: 120
// there is a loop happening here but with a condition // the if (num == 1){ return 1} is the condition
// this is how deep cloning works

//..................bidos example....................................................................................
function countdown(n) {
  if (n <= 0) {
    console.log(0);
  } else {
    console.log(n);
    countdown(n - 1);
  }
}
countdown(10);

//......deep copy using recursion
function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {}); // 0 is the initializing value for the accumulator but in this case you write curly braces: object as a starting point
  } else if (typeof obj == "array") {
    return; // something
  }
  return obj;
}
const newObj = { 1: "hi", 2: " how are you", fun: () => console.log("Hi") };
const superNewObj = deepCopy(newObj);
console.log(superNewObj);

//=========================Exercises==100220=======================================================================================================================================

// 1-Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.
// Examples:
// 4, { min: 0, max: 5 }) ➞ true 4, { min: 4, max: 5 }) ➞ true 4, { min: 6, max: 10 }) ➞ false 5, { min: 5, max: 5 }) ➞ true

function rangeNum(given) {
  let result = 0;

  let numObj = [
    {
      min: 10,
      max: 20
    },
    {
      min: 5,
      max: 9
    },

    {
      min: 1,
      max: 4
    }
  ];

  for (let [min, max] of Object.entries(numObj)) {
    // now we have for of (instead of for in)
    if (given > min && given < max) {
      console.log("true");
    } else {
      console.log("false");
    }
    return result;
  }
}

rangeNum(6);
rangeNum(7);
rangeNum(10);
rangeNum(616);

//----------------------------------Hadis solution----------------------------------------------------------------------------------------------------------------------------------

let objRa = { min: 10, max: 11 };

function fun(num, obj) {
  return num >= objRa.min && num <= objRa.max;
}

console.log(fun(4, { min: 0, max: 5 }));
console.log(fun(objRa));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2-Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 },
// { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const tilesArr = [
  {
    tile: "D",
    score: 2
  },
  {
    tile: "A",
    score: 1
  },
  {
    tile: "E",
    score: 1
  },
  {
    tile: "N",
    score: 1
  },
  {
    tile: "K",
    score: 5
  },
  {
    tile: "Z",
    score: 10
  },
  {
    tile: "X",
    score: 8
  }
];

function scrabble() {
  let result = 0;
  for (i = 0; i < tilesArr.length; i++) {
    result += tilesArr[i].score;
    // console.log(result);
  }
  return result;
}

console.log(scrabble());

//----------------------------------Hadis solution----------------------------------------------------------------------------------------------------------------------------------

// function score(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arrayScore[i];
//   }

//   return result;
// }

// console.log(score(arrayScore));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3-Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// {} ➞ true {a: 1} ➞ false

//----------------------Hadis solution-----------------------------------------------------------------------------------------------------------------------------------------------

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ 1: 222 }));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Free Shipping. Create a function that determines whether an online order should get free shipping.
// An order gets free shipping if the total cost of items exceeds €50.
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false 5. Programming Object.

const items = { Sponge: 3.5, Soap: 5.99 };

function freeShipping() {
  let result = 0;
  let price = Object.values(items);
  // console.log(price);

  //   for (i = 0; i < price.length; i++) {
  //     let sum = price.reduce(function(a, b) {
  //       return a + b;
  //     }, 0);

  for (i = 0; i < price.length; i++) {
    result += price[i];
  }

  //   if (sum < 50) {
  //     console.log("sorry no free shipping");
  //   } else {
  //     console.log("free shipping");
  //   }

  return result;
}
console.log("check exercise");
console.log(freeShipping());

//----------------------Hadis solution-----------------------------------------------------------------------------------------------------------------------------------------------

console.log("ex.4");
function freeShipping2(obj) {
  let values = Object.values(obj);
  console.log(values);
  result += values[i];
  return result < 50;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log("ex.5");

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Change the difficulty to the value of 7.
programming.difficulty = 7;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
delete programming.jokes;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
programming["is fun"] = true;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using a loop, iterate through the languages array and console.log all of the languages.
let array = programming.languages; // this is a reference (not cloning)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using a loop, console.log all of the keys in the programming object.
let ProgrammingKeys = Object.keys(programming);
for (let key in programming) {
  console.log(key);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(programming[key]);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
programming.is = () => {
  if (programming.isChallenging && programming.isRewarding) {
    return `${programming.languages}`;
  } else {
    return `sorry, something went wrong`;
  }
};

console.log(programming.isTrue);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Bonus:
// Make sure that any other code cannot delete or change properties of the object.(need Google)
Object.freeze(programming);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// console.table()
