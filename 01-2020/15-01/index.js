//=========================================EXERCISES===============================================================

//...............1. Calculate the perimeter of a square. Assume each side is 4.75cm...............................
console.log(
  "-------------------exercise-1--------------------------------------------------------------"
);

let side = 4.75;
let per = side * 4;
console.log(`the perimeter of a square is ${per}cm`);

// expected outcome: the perimeter of a square is 19cm

//..................2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm (base), 7cm.............
console.log(
  "-------------------exercise-2--------------------------------------------------------------"
);

let tside1 = 5;
let tside2 = 6;
let tside3 = 7;
let tper = tside1 + tside2 + tside3;
console.log(`the perimeter of the triangle is ${tper}cm`);

// expected outcome : the perimeter of the triangle is 18cm

//.....................3. Calculate the area of a square. Each side is 5cm.........................................................
console.log(
  "-------------------exercise-3--------------------------------------------------------------"
);

let qside = 5;
let qarea = Math.pow(5, 2);
console.log(`the area of the square is ${qarea}cm`);

// expected outcome: the area of the square is 25cm

//.................4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm............................
// For a triangle with sides a, b and c, the half-perimeter s = 1/2(a + b + c). Once you know s, you calculate area using this formula:
// Area = square root [s (s - a) (s - b) (s - c)]
console.log(
  "-------------------exercise-4--------------------------------------------------------------"
);

let tside4 = 5;
let tside5 = 6;
let tside6 = 7;

let s = (tside4 + tside5 + tside6) / 2;
let tarea = Math.sqrt(s * (s - tside4) * (s - tside5) * (s - tside6));

console.log(`the area of the triangle is ${tarea.toFixed(2)}cm`);

// expected outcome: the area of the triangle is 14.70cm

//....................5. Calculate the volume of a cube. Length of each side is 9cm.................................................
console.log(
  "-------------------exercise-5--------------------------------------------------------------"
);

let cside = 9;
let cvol = Math.pow(9, 3);

console.log(`the volume of the triangle is ${cvol}cm3`);

// expected outcome: the volume of the triangle is 729cm3

//...............6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip............................
console.log(
  "-------------------exercise-6--------------------------------------------------------------"
);

let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.92;
let tip1 = (bill1 / 100) * 10;
let tip2 = (bill2 / 100) * 15;
let tip3 = (bill3 / 100) * 20;

let totalbill1 = bill1 + tip1;
console.log(`the first bill's total is ${totalbill1.toFixed(2)}€`);

let totalbill2 = bill2 + tip2;
console.log(`the second bill's total is ${totalbill2.toFixed(2)}€`);

let totalbill3 = bill3 + tip3;
console.log(`the thrird bill's total is ${totalbill3.toFixed(2)}€`);

// expected outcome:
// the first bill's total is 24.59€
// the second bill's total is 30.67€
// the thirrd bill's total is 43.10€

//..Declare two variables: “a” with the value of true, and “b” with the value of false.........................................................
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).
console.log(
  "-------------------exercise-7--------------------------------------------------------------"
);

const a = "true";
const b = "false";

console.log(a && b);
console.log(a || b);
console.log(!(a && b));

// expected outcome:
// false
// true
// false

//..the second question is Declare three more variables “x”, “y”, “z”. Give these variables number values.......................................
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
// 16:33
console.log(
  "-------------------exercise-8--------------------------------------------------------------"
);

let x = 6;
let y = 10;
let z = 7;

console.log(x > z && x > y); // false
console.log(x !== y); // true
console.log(z < y || z > x); // true
console.log(x == z || x !== y); // true
console.log(x >= 10 && y <= 10); // false
console.log(x * z < 100 || x * y > 100); // true

// expected outcome:
// false
// true
// true
// true
// false
// true

//=================================================================================================================
