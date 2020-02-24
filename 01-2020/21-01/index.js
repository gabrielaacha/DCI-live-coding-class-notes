// BFF
function display(str) {
  // parameter is a var inside of the function but its value comes from outside
  console.log(str);
}

display("Hadi"); // this is used in order to debug the code // it represents the above function and console.log

//..............Array.isArray(arr) // to check if it is an array......................................................................
console.log(
  "--------------------Array.isArray(arr)-------------------------------------------------------------------"
);
const names = ["Ali", "Hadi", "Olga", "Nancy"]; // with typeof we would bet that it is an object but we need to know that it is also an array
let x = 1;
console.log(Array.isArray(names)); // i am asking if this is an array

// expected outcome: true

//..............Array.includes() // to ask which array i am using now // is this array including "hadi"?.................................
console.log(
  "--------------------Array.includes()-------------------------------------------------------------------"
);
console.log(names.includes("Hadi"));
// expected outcome: true

//..............Array.indexOf()..........................................................................
console.log(
  "--------------------Array.indexOf()-------------------------------------------------------------------"
);
console.log(names.indexOf("Hadi")); // to show the index number
// expected outcome: 1

//..............Array.reverse() // Reverse................................................................................................
console.log(
  "--------------------Array.reverse()-------------------------------------------------------------------"
);
let rev = names.reverse(); // it exchanges the last and the one index at the beginning, its a shift
console.log(rev);

// expected outcome: [ 'Nancy', 'Olga', 'Hadi', 'Ali' ]

//...............Array.concat() // combines several arrays into one array.................................................................
console.log(
  "--------------------Array.concat()-------------------------------------------------------------------"
);
let arr1 = [1, 2, 3]; // array can also be text
let arr2 = [4, 5, 6];
let arrTotal = arr1.concat(arr2); // i call the first arry to apply a function that combines itself with the others arrays
console.log(arrTotal); // expected output --> [ 1, 2, 3, 4, 5, 6 ]

// expected outcome: [ 1, 2, 3, 4, 5, 6 ]

//Array.filter() // creates a new array // narrow down choices, will create a new array with the results
// its a function calling another function that we have to declare (callback is how it's called)
console.log(
  "--------------------Array.filter()-------------------------------------------------------------------"
);
let result1 = names.filter(name => name.length == 4); // empty brackets so far was exec this function (no parameter)
// i am calling the array names to another function, in order to chose the name in the array that has 4 characters
// telling java script to work by name, to chose the individual names with the proposed length
// name can be replaced by x and any name (name => name.length == 4) --> this is a mini function inside the function
// you would do 2 at a time always
console.log(result1);
// expected outcome: [ 'Olga', 'Hadi' ]

let result2 = names.filter(name => name.length == 4 || name.length == 5);
console.log(result2);
// expected outcome: [ 'Nancy', 'Olga', 'Hadi' ]

//.....Array.find() // return the value of the first element.........................................................................................
console.log(
  "--------------------Array.find()-------------------------------------------------------------------"
);
// find will come up with the very first result it finds, as opposed to filter, which will chose several options
let result3 = names.find(name => name[0] == "A" && name[1] == "G"); // it will come only with the first option it finds

console.log(result3);
// expected outcome: undefined

//.......Array.map() // creates a new array // it would replace "for" by this in order to alter the individual indexes................................
console.log(
  "--------------------Array.map()-------------------------------------------------------------------"
);
const intArray = [2, 3, 5, 6, 8];
let result4 = intArray.map(x => x + 1); // increase every individual index with 1
console.log(result4);
// expected outcome: [ 3, 4, 6, 7, 9 ]

//_____________________________________________________________________________________________________________________

//===================EXERCISES=====================================================================
console.log(
  "--------------------Exercise-1-------------------------------------------------------------------"
);
// 1. Reverse the string: “JavaScript”
// expected outcome :
//[
//  'J', 'a', 'v', 'a',
//  'S', 'c', 'r', 'i',
//  'p', 't'
// ]
// tpircSavaJ
const str1 = "JavaScript";
let strToArr = str1.split("");
console.log(strToArr);
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

// 1. Make an array of your siblings’ names or your favorite movie characters’ names.
console.log(
  "--------------------Exercise-1-------------------------------------------------------------------"
);
let arrMov = ["Alma", "Elisabeth", "Dorothy"];

// 2. Make an array of your parents’ names.
console.log(
  "--------------------Exercise-2-------------------------------------------------------------------"
);
let arrPar = ["Edurne", "Pablo"];

// 3. Combine these two arrays.
console.log(
  "--------------------Exercise-3-------------------------------------------------------------------"
);
let arrNames = arrMov.concat(arrPar);
console.log(arrNames);
// expected outcome: [ 'Alma', 'Elisabeth', 'Dorothy', 'Edurne', 'Pablo' ]

// 4. Add your pets’ names.
console.log(
  "--------------------Exercise-4-------------------------------------------------------------------"
);
arrNames.push("Croquetas");

// 5. Reverse the order of the array.
console.log(
  "--------------------Exercise-5-------------------------------------------------------------------"
);
let arrRev = arrNames.reverse();
console.log(arrRev);
// expected outcome: [ 'Croquetas', 'Pablo', 'Edurne', 'Dorothy', 'Elisabeth', 'Alma' ]

// 6. Access one of your parents’ names.
console.log(
  "--------------------Exercise-6-------------------------------------------------------------------"
);
let resultPar = arrNames.find(parName => parName == "Edurne");
console.log(resultPar);
// expected outcome: Edurne

console.log(arrNames[2]);
// expected outcome: Edurne

// 7. Update the name of one of your parents
console.log(
  "--------------------Exercise-7-------------------------------------------------------------------"
);
let newName = (arrNames[2] = "Nieves");
console.log(arrNames);
// expected outcome: [ 'Croquetas', 'Pablo', 'Nieves', 'Dorothy', 'Elisabeth', 'Alma' ]

// another solution
console.log(
  "--------------------Exercise-7-another solution------------------------------------------------------------------"
);
mom = "Nieves";
arrNames[2] = mom;
console.log(arrNames);
// expected outcome: [ 'Croquetas', 'Pablo', 'Nieves', 'Dorothy', 'Elisabeth', 'Alma' ]

//_____________________________________________________________________________________________________________________

// FUNCTIONS

// place where i exec this line multiple times whenever i call the function
// function sum (){
// }
// everything that happens in the function stays in the function
// for example:
console.log(
  "--------------------Functions-------------------------------------------------------------------"
);

function sum(x, y) {
  let result = x + y;
  return result; // you use return to link the console.log to the function, whenever it is located outside of it {}
}
// function declaration and function call
console.log(
  "------------------------------------------------------------------------------------------------"
);
let fun = sum(2, 4); // this is function call
console.log(fun);

//............................................................................................................
console.log(
  "------------------------------------------------------------------------------------------------"
);

function div(x, y) {
  return x / y;
}

//............................................................................................................
console.log(
  "------------------------------------------------------------------------------------------------"
);

function age(x) {
  if (x == 30) {
    return "you are cool";
  } else {
    return "you are nice";
  }
}

console.log(age(20)); // the function call will come with a result and i am consoling.log the result
// better not to name local and global variables with the same name

//............................................................................................................
console.log(
  "------------------------------------------------------------------------------------------------"
);

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [9, 289, 13, 214, 5654, 6, 130, 455, 66444];
function arrBig(array) {
  // whatever the parameter is is connecting the function with the declared arrays
  let result = array.filter(num => num <= 500);
  return result; // it's pushing the function to the outside world, without return everything stays in the function
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));

//========================================Exercisew===================================================================
console.log(
  "-----------------------------Exercises-----------------------------------------------------------"
);

// create  a function picking the names with 4 characters in an array
console.log(
  "------------------------------Exercise-1---------------------------------------------------------"
);

function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
console.log(fourArrChar(names2));

// create a function grabbing the names that starts with the letter "o"
console.log(
  "------------------------------Exercise-2---------------------------------------------------------"
);

function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(Ochr(names2));

//..............................................................................................................
console.log(
  "---------------------------------Exercise------------------------------------------------------"
);

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

function nameOfThatMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a month");
  }
  return result;
}

console.log(nameOfThatMonth(2));

//-----------------------------------------------------------------------------------------------------------------
console.log(
  "---------------------------------Exercise---------------------------------------------------------"
);

function monthOfMyBirthday(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "J") {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(monthOfMyBirthday(monthNames));

let monthOfMyBirthday2 = monthNames.find(name => name.length == 4);
console.log(monthOfMyBirthday2);

// hadis
console.log(
  "------------------------------Exercise-Hadis---------------------------------------------------------"
);

function nameOfThatMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num <= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "sorry it is not a month";
  }
  return result;
}

console.log(nameOfThatMonthEasyVersion(3));

//____________________________________________________________________________________________________________

// 1. Reverse the  a whole array
console.log(
  "------------------------------Exercise-1---------------------------------------------------------"
);

let arrRev1 = ["one", "two", "three", "four"];

// function strToArr2(array) {
//  let revStr2 = arrRev[i].split("");
// revStr2.reverse("");
// let revStr3 = revStr1.join("");
// return result;
// }

// console.log(strToArr2(arrRev1));

// hadis solution
console.log(
  "------------------------------Exercise-1-Hadis------------------------------------------------------"
);

function reverseNames(arr) {
  let newArray = [];
  let strToArr = "";
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    strToArr = str.split(""); // "" split by letter is th meaning
    strToArr.reverse();
    revStr = strToArr.join("");
    newArray.push(revStr);
  }
  return newArray;
}

console.log(names);
console.log(reverseNames(names));

// hadis professional solution:
console.log(
  "------------------------------Exercise-1-Hadis professional solution----------------------------------------------"
);

function reverseNames(arr) {
  let newArray = []; // this will create a new array // therefore the empty array
  let str = ""; //
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("") // this will live inside of str
      .reverse() // this will live inside of str // important to not write semi-colons until the end
      .join(""); // this will live inside of str
    newArray.push(str);
  }
  return newArray;
}

console.log(arrRev1);
console.log(reverseNames(arrRev1));

//__________________________________________________________________________________________________________________
