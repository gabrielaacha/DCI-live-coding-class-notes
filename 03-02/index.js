// functions inside functions
function main(num, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n; // 9
  } // 9    // 16
  return second(num) + second(num2);
}

console.log(main(3, 4));

// nested scopes : accessing outer global variables
var nice = true; // here i am declaring the variable outside of the scope, i can use it everywhere, in the inner and outer function
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + "outerFunction");

  const innerFunction = num => {
    big = false; // i am not able to access that outside of the scope
    nice = false;
    console.log(big + "innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4)); // you would get two results because the function is called twice
console.log(nice);

// closure
// you wanna access a variable that is global but you don't need anyone to do it
// most common way to secure information
var number = 10; // this declaration has to be outside of the function
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);

//---------------------------------

function add() {
  var counter = 0; // you move the counter inside the function // it is more secure, nobody can change it
  counter += 1; // or you can have counter++ instead
  return counter;
}

add(); // 1
add(); // 2
add(); // 3
console.log(add());

// anonymous function
// invoking == calling
const add2 = (() => {
  // you can also add a value to this function
  var counter = 0;
  return function() {
    counter++;
    return counter; // this function is anonymous and it is returning another function
  };
})();

add2(); // 1
add2(); // 2
add2(); // 3
console.log(add());

//----------------------

// const add = (() => {}) () // this is a self invoked function
// this function will call itself automatically all the time

const add3 = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
add3(); //1

//-----------------------------

(function display() {
  let x = 0;
  console.log("hi");
  return () => {
    x++;
    return x;
  };
})(); // function call right after the function declaration // good to secure information // invoking is like calling itself // parenthesis () is a function call immediately after the function
// this is used mainly for security, the function works same as when it is not self invoked
// common to use it for shopping or for when the user has to amend info, etc
// it is theoretically a call back function but in this context it is called closure because it is securing the global value so no one can amend
// display();

//-------------------------

// SIAF self invoked anonymous functions // closed to itself and called immediately
// this will reder one time and immediately
(function() {
  console.log("Hi");
})();
// not anonymous
// two ways + passing parameter
// this i would use if i need to recur to the function more times
const sum = ((x, y) => {
  return x + y; // the value is from return
})(5, 6); // now you are assigning a value to the function and thus to the variable
// useful for payments with cards etc...
console.log(sum);

//==============================RECAP==============================================================================

//----loops----------------------------------------------------------------
for (let i = 10; i >= 0; i--) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result}`);
}

//-----------if else------------------------------------------------------
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Nooooooo");
}
//-----------------------------array--------------------------------------
// multiple values in one variable
const arr = [3, 4, 67, 6];
console.log(arr[2]);

//====================================EXERCISES=========================================================0

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
// e.g. add(2)(3)

function add4(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add4(2)(3));

// Write a function multiplier that uses a closure to perform multiplication.
// However, the outer function should be stored in a variable which is then called.
function mul(num5, num6) {
  function mul2(n) {
    return n;
  }
  return mul2(num5 * num6);
}
console.log(mul(5, 2));

//--------------hadis-------------------------------------
function multiplier(num) {
  // outer function
  // do something
  return x => x * num; // inner function in ES6 style
}
const times = multiplier(5)(5); // the function is stored in a variable // this is the call for the outer function
console.log(times); // do other thing // separate the code for extra safety // this is the call for the inner function // i can have it in both lines
// the first call is the variable but the real function call is the second one.

//--------------------------------------------------------

var all = 3;
(function() {
  var all = "Hi";
  console.log(all);
})();
console.log(all);

//---------------------------------------------------------

// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

function money(cur, ret, wag, per) {
  let ageCur = 0; // 40
  let ageRet = 0; // 60
  let monWag = 0; // 1000
  // let year = new Date().getFullYear();
  // let born = 0;
  let yearsToRet = ageRet - ageCur;
  let saving = (monWag / 100) * per * 12 * yearsToRet;
  console.log(saving);

  if (ageCur > ageRet) {
    console.log("you are already retired");
  } else {
    console.log(saving);
  }
}

console.log(money(35, 65, 1500, 10));

//---------------------------------Hadis solution------------------------------------------------------------

((currentAge, retirementAge, monthlyWage, pare) => {
  // this function is anonymous, it does not need a name
  if (currentAge >= retirementAge) {
    console.log("you are already retired");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(yearsToSave + " years to go");
    let monthsToSave = yearsToSave * 12;
    console.log(monthsToSave + " months to go");
    let amountSavedByMonth = (monthlyWage * pare) / 100;
    console.log(amountSavedByMonth);
    let totalSave = amountSavedByMonth * monthsToSave;
    console.log(
      `you will get retired in ${yearsToSave} and you will have ${totalSave} in your bank`
    );
  }
})(30, 65, 1000, 5);

//---------------------------------------------------
// function age(num) {
//   let year = new Date().getFullYear();
//   let userAge = year - num;
//   return num < year && num > 1900
//     ? `${userAge} years old`
//     : `Please enter a valid year`;
// }
// console.log(age(1940));
// console.log(age(2200));

//=================================================================================

// trim()
let str = " Hi ";
console.log(str.trim());

// trimEnd()
console.log(str.trimEnd());

//trimStart()
console.log(str.trimStart());

// startsWith()
let text = "Hi tonight I will have fun";
console.log(text.startsWith("Hi")); // true

//endsWith()
console.log(text.endsWith("fun")); // true

//charAt()
// will
let chr = "A"; //
console.log(chr.charAt(0));

// charCodeAt
let chr2 = "b"; // UTF-16 UTF-8 ASCII
console.log(chr2.charCodeAt(0) - 96); // the alphabet starts in 96

const icons = "🙃";
console.log(icons);
