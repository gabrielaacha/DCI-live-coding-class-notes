//------------array name <value 1>, <value2>,...________..........................................................
console.log(
  "----------------array name <value 1>, <value2>,...------------------------------------------------------"
);

let arrStr = ["hi", "text", "text"]; // 1st way of declaring arrays // this is the most common way
console.log(arrStr);
let arrInt = []; // 2nd way of declaring arrays // this is also usual because often you don't know what is the incoming data
console.log(arrInt);
arrInt[0] = 22; // assigning 22 to the very first element of the array
arrInt[1] = 22;

// expected outcome: [ 'hi', 'text', 'text' ]
// []

//...........Array(num) // to create an array with num slots.................................................
console.log(
  "-----------------------Array(num)-------------------------------------------------------------------------"
);

let arrString = new Array(4);
let arrStr2 = Array("Hadi", "NAme1", "NAme2");
console.log(arrStr2);

// expected outcome: [ 'Hadi', 'NAme1', 'NAme2' ]

//.............Array.of() creating array...................................................................
console.log(
  "------------------------Array.of()-----------------------------------------------------------------------"
);

let strArr = Array.of(3);
console.log(strArr);

// expected outcome: [ 3 ]

//...................Accessing using square brackets........................................................
console.log(
  "--------------------------------------------------------------------------------------------------------"
);

//Adding items
console.log(
  "----------------------Adding items----------------------------------------------------"
);

arrInt[2] = 33;
arrInt[3] = 53;

console.log(
  "----------------------push----------------------------------------------------"
);
arrInt.push(663); // same type of information but different placement this is why you change
arrInt.push(222); // pushing this array to the end of the line
console.log(arrInt);

// expected outcome: [ 22, 22, 33, 53, 663, 222 ]

console.log(
  "----------------------unshift----------------------------------------------------"
);
// in order to push it to the front and not the end of the line, we use "unshift"
arrInt.unshift(322);

console.log(arrInt); // this method is not so practical if you don't know the outcome you want

// expected outcome: [
//  322,  22,  22, 33,
//   53, 663, 222
// ]

console.log(
  "----------------------typeof----------------------------------------------------"
);
console.log(typeof arrInt); // to check the type

console.log(
  "----------------------indexOf----------------------------------------------------"
);
var firstNameArr = ["Ali", "Olga", "HAdi"];
console.log(firstNameArr.indexOf("Olga")); // if the name is in the list it will give the corresponding nr. (1 in this case)
console.log(firstNameArr.indexOf("Nancy")); // if the consoled name is not in the list then you get result -1

// expected outcome: object

//................array and for go very often together...............................................
console.log(
  "------------------array and for------------------------------------------------"
);

let arrStringName = ["Hello 1"];
for (let i = 0; i <= 10; i++) {
  arrStringName[i] = `Hadi ${i}`;
}
console.log(arrStringName);

// expected outcome:
// [
//  'Hadi 0',  'Hadi 1',
//  'Hadi 2',  'Hadi 3',
//  'Hadi 4',  'Hadi 5',
//  'Hadi 6',  'Hadi 7',
//  'Hadi 8',  'Hadi 9',
//  'Hadi 10'
// ]

console.log(
  "--------------------deleting items;--------------------------------------------------"
);
// deleting items;
// array.pop()
// array.shift()
let funArr = ["😎", "💪🏻", "😊"];
funArr.pop(); // in order to delete one item, it will be always the last one, brackets always empty, you don't enter a value in the brackets
funArr.shift(); // this will remove the very first element // no value inside the parenthesis
console.log(funArr);

// expected outcome: [ '💪🏻' ]

console.log(
  "-----------------------assign the value-----------------------------------------------"
);
// this will assign the value declared to the array // it will change the index, not the value
var lastName = ["Hello"];
lastName[0] = "Nsreeny";
lastName[1] = "Dany";

console.log(lastName);
// you can't change the array but you can change the index of the array

//expected outcome: [ 'Nsreeny', 'Dany' ]

//.................const and var.....................................................................................
console.log(
  "--------------------------const and var-----------------------------------------------"
);

let x = 0;
x = 2 + 2;
console.log(x);

//.......................................

var y = 0; // original value declaration // used for hoisting and in global situations
y = 2 + 2;
console.log(y);

//........................................

const zz = 0; // i am not able to change its value anymore
// zz = 3 + 3;
console.log(zz);

//.........................................

let names = ["Hadi", "Ali", "Nancy", "Dany"];
let name = "jam"; // string
console.log(names.length); // index of array
console.log(name.length); // jam

// expected outcome:

/* 
4
4
0
4
3
*/

// Array.slice() // slice would cut
console.log(
  "---------------------- Array.slice()----------------------------------------------"
);

console.log(names.slice(3)); // will slice everything but index 3
console.log(names.splice(1, 3)); // cuts all but index 1-3

// expected outcome: [ 'Dany' ]
// [ 'Ali', 'Nancy', 'Dany' ]

//..................Array.split()......................................................
console.log(
  "------------------------Array.split()-----------------------------------------------"
);

let stringToArray = name.split("\n");
console.log(stringToArray); // it would split each character in the string within the array

// expected outcome:
// [ 'jam' ]

//________________________________________________________________________________________________________________________________

//=============EXERCISE200120=========================================================================
console.log(
  "----------------EXERCISE200120--------------------------------------------------------"
);

// 1. Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
console.log(
  "----------------------exercise-1----------------------------------------------------"
);

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

//-----------------------------------------------------------------------------------------------------

// 1b. Declare another variable and assign the second item of the array as a value.
console.log(
  "----------------------exercise-1b----------------------------------------------------"
);

let euroCity2 = euroCities[1];

//-----------------------------------------------------------------------------------------------------

// 2. Change the first item in the array to “Berlin”.
console.log(
  "----------------------exercise-2----------------------------------------------------"
);

euroCities[0] = "Berlin";
console.log(euroCities);

// expected outcome: [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

//-----------------------------------------------------------------------------------------------------

// 3. Print the length of the array “euroCities”.
console.log(
  "----------------------exercise-3----------------------------------------------------"
);

console.log(euroCities.length);

// expected outcome: 5

//-----------------------------------------------------------------------------------------------------

// 4. Remove the last item of the array “euroCities”.
console.log(
  "----------------------exercise-4----------------------------------------------------"
);

euroCities.pop();
console.log(euroCities);

// expected outcome: [ 'Berlin', 'London', 'Valletta', 'Prague' ]

//-----------------------------------------------------------------------------------------------------

// 5. Use an array method to add “Budapest” to the euroCities array.
console.log(
  "----------------------exercise-5----------------------------------------------------"
);

let euroCity = "Budapest";

euroCities.push(euroCity);
console.log(euroCities);

// expected outcome: [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

//-----------------------------------------------------------------------------------------------------

// 6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
console.log(
  "----------------------exercise-6----------------------------------------------------"
);

let asianCities = ["Tokio", "Shanghai", "Hanoi", "New Dehli", "Bangkok"];

//-----------------------------------------------------------------------------------------------------

// 7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
console.log(
  "----------------------exercise-7----------------------------------------------------"
);

console.log(asianCities.slice(1, 4)); // slice and splice work same

// expected outcome: [ 'Shanghai', 'Hanoi', 'New Dehli' ]

let newArray = asianCities.splice(1, 3); // always create new variable and assign the value
console.log(newArray);

// expected outcome: [ 'Shanghai', 'Hanoi', 'New Dehli' ]

//-----------------------------------------------------------------------------------------------------

//___________________________________________________________________________________________________________________
//===================================================================================================================

// Array.join() // erases spaces in between word
console.log(
  "-----------------------------Array.join()--------------------------------------------"
);

const arrayString = ["This", "is", "array", "was", "string"];
let stringToArr = arrayString.join("");
console.log(stringToArr);

// expected outcome: Thisisarraywasstring

//___________________________________________________________________________________________________________________

//===========================EXERCISES==============================================================================
console.log(
  "--------------------------EXERCISES:------------------------------------------------"
);

// 1. sumOfNumbers: Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.
console.log(
  "--------------------------exercise-1------------------------------------------------"
);

let sumOfNumbers = [3444, 7373, 54, 940, 3];
let sum = 0; // you just start with 0
let product = 1;
for (var i = 0; i < sumOfNumbers.length; i++) {
  sum += sumOfNumbers[i]; // each time the
  product *= sumOfNumbers[i];
}

console.log(`The sum  is ${sum} The product is ${product}`);

// expected outcome: The sum  is 11814 The product is 3866786955360

const sumOfNumbers3 = [3444, 7373, 54, 940, 3];
const add = (a, b) => a + b;
const sum3 = sumOfNumbers3.reduce(add);

console.log(sum3);

// expected outcome: 11814

//................................................................................................................

// 2. Hello Friend: Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
console.log(
  "--------------------------exercise-2------------------------------------------------"
);

let friendsName = ["Samuel", "Maria", "Luke", "Mary"];
for (let i = 0; i < friendsName.length; i++) {
  // or i keep the = and add -1 // the friends.length counts the amount of elements in the array, you write that if you don't know this amount
  console.log(`Hello ${friendsName[i]} and he is index ${i}`);
}

// expected outcome:
// Hello Samuel and he is index 0
// Hello Maria and he is index 1
// Hello Luke and he is index 2
// Hello Mary and he is index 3

//...................................................................................................................

// 3. City Names.: Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: “Berlin, Paris, Prague, Rome”.
console.log(
  "--------------------------exercise-3------------------------------------------------"
);

let cityNames = ["Berlin", "Paris", "Prague", "Rome"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}

console.log(cityNamesStr);

// expected outcome: Berlin, Paris, Prague, Rome.

//.........................................................................................................

// a. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
// Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
console.log(
  "--------------------------exercise-3a------------------------------------------------"
);

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

// expected outcome: [ 2, 3, 1, 4, 5 ]

//....................................................................................................................

// b. Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
console.log(
  "--------------------------exercise-3b------------------------------------------------"
);

const arrNames = ["sAra", "akI", "nancy"]; // it doesn't work
for (let i = 0; i < arrNames.ĺength; i++) {
  arrNames[i] =
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase(); // the first [i] value is a string // this kind of syntax is everywhere
}
console.log(arrNames);

// expected outcome: [ 'sAra', 'akI', 'nancy' ]

//====================================================================================================================
