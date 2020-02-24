console.log(
  "----------------------start------------------------------------------------------------------------------"
);
let x, y, z; //
x = 1; //
y = "T";
z = x + y;
console.log(z);

// math.max || math.min
console.log(
  "----------------------Math.max | Max.min------------------------------------------------------------------------------"
);
console.log(Math.max(33, 44, 52, 111111, 76, 7, 0));
console.log(Math.min(33, 47111, 4, 5, 6, 0.3, 7));

//we create this short cut to not have to use console.log all the time
console.log(
  "------------short cut display----------------------------------------------------------------------------------"
);
function display(str) {
  console.log(str);
}
display("Hi this is a new function");

// every information entered by the user will first appear as string, it has to be turned into number tu be calculated
console.log(
  "------------------------------------------parseInt--------------------------------------------------------------------------------"
);
let strInt = "12333";
let strInt2 = "999";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));

// same with decimals, we use the US system but since european users will enter data with commas we have to be aware of that
console.log(
  "------------------------------------same with decimals------------------------------------------------------------------------------"
);
let strFloat = "333.553";
console.log(parseFloat(strFloat));

// round up and down
console.log(
  "-------------------round up and down--------------------------------------------------------------------------------------------------"
);
let float1 = 2.4;
console.log(Math.ceil(float1)); // will round up the number
console.log(Math.floor(float1)); // will round down the number

// capitalise
console.log(
  "-------------------capitalise--------------------------------------------------------------------------------------------------"
);
let str1 = "this is a  new text";
console.log(str1.toUpperCase());

//Addition
// x + y * s
console.log(
  "------------------------Addition--------------------------------------------------------------------------------------------------------"
);
let x1 = 4;
let y1 = 6;
let z1 = x1 + y1;
console.log(((x1 + y1) / (z1 + 2.3)) * 29 + x);

// String + Number
console.log(
  "----------------------String + Number----------------------------------------------------------------------------------------------------"
);
let d, f, r;
d = 5;
f = "Hi I'm Gabriela";
console.log(f + " " + d);

// Concatenation
console.log(
  "----------------------Concatenation-------------------------------------------------------------------------------------------------------"
);

// String + Boolean
console.log(
  "----------------------String + Boolean-----------------------------------------------------------------------------------------------------"
);
r = true;
console.log(r + d); // true in javascript is 1 and false is 0

// String + String
console.log(
  "----------------------------------String + String-------------------------------------------------------------------------------------------"
);
let str2 = "Hi";
let str3 = " I am Gabriela";
console.log(str2 + str3);

// typeof (Objects, functions, console...)
console.log(
  "-----------------typeof (Objects, functions, console...)-----------------------------------------------------------------"
);
console.log(typeof str3); // I would use it when I am not sure what type of data I am dealing with (whether it is a string or a number), often you don't know the type of data because it is coming from the backend
console.log(typeof x);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math.floor);

// (0.1 * 0.2)
console.log(
  "---------------------digits after comma-------------------------------------------------------------------------"
);
let floatNum = 0.1;
let floatNum1 = 0.2;
console.log((floatNum * floatNum1).toFixed(3)); // this makes the result be limited to 3 digits after the comma

let floatNum2 = 0.1;
let floatNum3 = 0.2;
let num = 3;
let result = floatNum2 * floatNum3;
let lastResult = result.toFixed(num);
console.log(lastResult);

// 1.23e+5 some number have an e (big number that is replaced by e)

// x = 3.444
console.log(
  "---------------------sorting the integers and floats-------------------------------------------------------------------------"
);
let intStr = "10 Hi this is cool"; // if the 10 is at the end it is not interpreted as a number
let floatStr = "1033.3 hi this is noooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));
//console.log(x.toFixed(2));

// && || (and or)
console.log(
  "---------------------&& || (and or)-----------------------------------------------------------------------------"
);
let var1 = true;
let var2 = true;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool"); // if ALL variables are true then "cool", else "not cool"

let var4 = 1 > 4; // false
let var5 = false;
let var6 = true;
console.log(var3 && var4 && var5 ? "cool" : "not cool"); // if ALL variables are true then "cool", else "not cool"
console.log(var3 || var4 || vcar5 ? "cool" : "not cool"); // if ONE of the variables is true then "cool", else "not cool"

// = Assigning
console.log(
  "---------------------= Assigning-------------------------------------------------------------------------"
);
console.log(ohNo);
var ohNo;
ohNo = x; // if it would be LET it would apply only to this function and the variable would have tpo be declared before the console.log
console.log(ohNo);

console.log(ohNo2);
var ohNo2;
let xx = "1";
ohNo2 = 1;
console.log(ohNo2);

// == vs ===
console.log(
  "----------------------== vs ===----------------------------------------------------------------------------"
);
// 2 times = to check if one number is equal to the other
// 3 times = to
console.log(1 == 1 ? "yeah it is" : "nope it is not");
console.log(1 == 2 ? "yeah it is" : "nope it is not");
console.log(x == 1 ? "yeah it is" : "nope it is not");
// console.log(x == OhNo ? "yeah it is" : "nope it is not");
// console.log(xx === OhNo2 ? "yeah it is" : "nope it is not");

// Truthy and falsy values: false, undefined, null, 0, ''
console.log(
  "--------------Truthy and falsy values: false, undefined, null, 0, ''---------------------------------------------------------------"
);
console.log(true ? "yes" : "Noooooo"); //every number but 0 is true in javascript
console.log(1 ? "yes" : "Noooooo");
console.log(0 ? "yes" : "Noooooo");
console.log("any word" ? "yes" : "Noooooo"); // any content in the string is true
console.log("" ? "yes" : "Noooooo"); // empty string is always false
console.log(null ? "yes" : "Noooooo"); // false
console.log(undefined ? "yes" : "Noooooo"); // falthy
console.log(Math.random ? "yes" : "Noooooo"); // I wanna check if these things exists

// what is not a number
console.log(
  "---------------------what is not a number------------------------------------------------------------------"
);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

var NotaNumber = undefined;
console.log(isNaN(NotaNumber) ? "true" : "false");
console.log(isNaN(NotaNumber) ? "this is NOT a number" : "this is a number");

var NotaNumber2 = true;
console.log(isNaN(NotaNumber2) ? "true" : "false");

var NotaNumber3 = null;
console.log(isNaN(NotaNumber3) ? "true" : "false");

var NotaNumber4 = "37";
console.log(isNaN(NotaNumber4) ? "true" : "false");

var NotaNumber5 = "";
console.log(isNaN(NotaNumber5) ? "true" : "false");

// Math.random // we will constantly use it in react
console.log(
  "----------------------Math.random // we will constantly use it in react---------------------------------------------------------------------"
);
console.log(Math.floor(Math.random() * 10) + 1); // you multiply in order to move the comma and get some control // Math.floor is used to turn the number integer

//___________________________________________________________________________________________________________________________________________________
console.log(
  "----------------------Exercises------------------------------------------------------------------------------"
);
// EXERCISE
console.log(
  "---------------------Exercise--1------------------------------------------------------------------------------"
);
// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

console.log(
  "---------------------Exercise--1b------------------------------------------------------------------------------"
);
// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4));

console.log(
  "---------------------Exercise--2------------------------------------------------------------------------------"
);
// 2. Rounding
// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.

let roundup1 = 3321;
let roundup2 = 326.76;
let roundup3 = -9.78;
let roundup4 = 43.342;
console.log(Math.ceil(roundup1));
console.log(Math.ceil(roundup2));
console.log(Math.ceil(roundup3));
console.log(Math.ceil(roundup4));

console.log(
  "---------------------Exercise--2b------------------------------------------------------------------------------"
);
// b. Round down
// Round down the following numbers: 3321, 326.76, 76788.7, -9.78,

let rounddown = 3321;
let rounddown2 = 326.76;
let rounddown3 = 76788.7;
let rounddown4 = -9.78;
console.log(Math.floor(rounddown));
console.log(Math.floor(rounddown2));
console.log(Math.floor(rounddown3));
console.log(Math.floor(rounddown4));

console.log(
  "---------------------Exercise--3------------------------------------------------------------------------------"
);
// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.

console.log(Math.floor(Math.random() * 6) + 1);
