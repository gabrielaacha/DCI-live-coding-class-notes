//......switch (<expression>){ ... } // it is used for ex. for currencies, for phone prefixes...................
console.log(
  "----------------------switch (<expression>){ ... } ---------------------------------------"
);
const color = "Pink";
switch (color) {
  case "Pink":
    console.log("cool");
    break;
  case "Black":
    console.log("Nice");
    break;
  case "white":
    console.log("soooo nice");
    break;
  default:
    console.log("Noooo that's crazy");
}
// expected outcome : cool
//.................an example of switch in order to choose one month of the year:.........................
console.log(
  "----------------------an example of switch---------------------------------------"
);
const month = 9;
switch (month) {
  case 0.1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sept");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("This is not real");
}
// expected outcome : Sept

//................another example for switch:..............................................................
console.log(
  "----------------------switch (another example) ---------------------------------------"
);
const x = 22.22;
switch (x) {
  case 1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 1000000001:
    console.log("cool");
    break;
  default:
    // you always need a default in case the user types something that is not listed
    console.log("so this is not for fun or is it!");
}
// expected outcome : this is wrong

//.....switch` vs. `else if`........................................................................
console.log(
  "----------------------switch` vs. `else if`---------------------------------------"
);

const num = 1;
if (num <= 10 || num >= 0) {
  console.log("it is num in the range of 0 and 10");
}
if (num == 1) {
  console.log(num);
}
if (num == 2) {
  console.log(num);
}
if (num == 3) {
  console.log(num);
}
if (num == 4) {
  console.log(num);
} else {
  console.log("It is new num");
}

const num2 = 1;
switch (num2) {
  case 1:
    console.log(num2);
    break;
  case 4:
    console.log(num2);
    break;
  case 3:
    console.log(num2);
    break;
  default:
    console.log("this is fun");
}

// expected outcome:
// it is num in the range of 0 and 10
// 1
// It is new num
// 1

// the order is very important, the statement that is on the top gets the priority // if the string is empty it would be 0 and divisible by 3 and 5 so it would print FizzBuzz

//=====================EXERCISES=====================================================================================
console.log(
  "----------------------exercise-1---------------------------------------"
);

//Let’s play mini FizzBuzz! For any given number, if the number is:
//divisible by 3, print “Fizz”.
//divisible by “5", print “Buzz”.
//divisible by both 3 and 5, print “FizzBuzz”.
//That is, if any of the above conditions apply, print the above words instead of the number.
//Otherwise, just print the number.

let miniFizz = 1;

if (miniFizz % 5 == 0 && miniFizz % 3 == 0) {
  // the order is very important, the statement that is on the top gets the priority // if the string is empty it would be 0 and divisible by 3 and 5 so it would print FizzBuzz
  console.log("Fizz");
} else if (miniFizz % 5 == 0) {
  console.log("Buzz");
} else if (miniFizz % 3 == 0) {
  console.log("FizzBuzz");
} else {
  console.log(miniFizz);
}

// expected outcome : 1
//-------------------------------------------------------------------------------

// homework
console.log(
  "----------------------homework ex.1---------------------------------------"
);

// Declare two variables: “a” with the value of true, and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).

let a = "true";
let b = "false";

console.log(a && b);
console.log(a || b);
console.log(!a && b);

// expected outcome:
// false
// true
// false

//-------------------------------------------------------------------------------
console.log(
  "----------------------homework ex.2---------------------------------------"
);

// Declare three more variables “x”, “y”, “z”. Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

let x1 = 3;
let y1 = 4;
let z1 = 5;

console.log(x1 > z1 && x1 > y1);
console.log(x1 !== y1);
console.log(z1 < y1 || z1 > x1);
console.log(x1 == z1 || x1 !== y1);
console.log(x1 >= 10 && y1 <= 10);
console.log(x1 * z1 < 100 || x1 * y1 > 100);

// expected outcome:
// false
// true
// true
// true
// false
// true

//===================================================================================================================
