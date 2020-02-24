//....error handling...............................................................................
// 3 types of errors : typos, logical and...
// v8 engine is really strong, javascript is a script language not a programming language. it will speak to the engine that will speak to the hardware.
// java script does not speak directly to the hardware

//typo:
//consol.log("Hi"); // instead of console.log("Hi");

// logical

let userAge = 25;
if (userAge == 25) {
  console.log("something else"); // if the user age is 25 print "Happy days", bu  is not doing that.
}

//run type error

// if {} for example
// when js starts running the application, it faces a problem

// how to solve it
// ask js to try and catch the error

try {
  console.log("Hi this is trying phase");
  cool();
} catch (err) {
  console.log("this error is" + err);
}

// it will stop when the error occurs and go directly to catch, it will only try one error
// you can have several try / catch
// for instance you can have a try catch for a whole API call
// try --> to test a block of code
// catch --> to handle the error
// throw --> to create custom error message

let userName = "";
try {
  console.log("Hi this is trying phase 2 ");
  if (userName == "") throw " sorry something went wrong"; // throw will create a custom error message
  console.log("2nd phase"); // if there is an error this part will never run
} catch (err) {
  console.log("this error is" + err);
} finally {
  console.log("this will always run");
}

//........................calling functions multiple times.............................................................................

function display() {
  console.log("Hi, this is a cool function");
}

for (let i = 0; i < 8; i++) {
  display();
} // this is how to call the function 8 times-

// self invoqued function (does not have to be called)
(function manyTimeCalledFunction(num) {
  display();
  if (num > 1) manyTimeCalledFunction(num - 1);
})(8);

function print() {
  console.log("hi i am js");
}

const timerPrint = setTimeout(print, 5000);
const timerDisplay = setTimeout(
  () => console.log("cool, that you have waited for me"),
  1000
);
clearTimeout(timerDisplay);

//=============================Exercise============================================================================================

// Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
// Example
// getMonthName(15) -> Invalid Month Number!

// 09:55
// Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!
