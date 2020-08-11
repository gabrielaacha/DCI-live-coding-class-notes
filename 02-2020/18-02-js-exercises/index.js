//============================exercises=from=31-01-20===================================================
//---------------------------do it in 3 different ways-------------------------------------------------
//---------------------------------first way------------------------------------------------------------
// Create a function will calculate a student degrees for 6 subjects,
// 1-if the average was less than 70 will print (F)
// 2-Over 70 and less than 80 (C)
// 3-over than 80 and less than 85 (B)
// 4-Over than 85 and less than 90 (A)
// 5-And over 90 print (A+)

let grades = [74, 87, 80, 76, 87, 90];

function degree(arr) {
  let sumMarks = 0;
  let realAverage = 0;
  for (let i = 0; i < arr.length; i++) {
    sumMarks = sumMarks += arr[i];
    realAverage = Math.floor(sumMarks / arr.length);
  }
  if (realAverage < 70) {
    return "sorry your mark is F";
  } else if (realAverage > 70 && realAverage < 80) {
    return "your mark is C";
  } else if (realAverage > 80 && realAverage < 85) {
    return "your mark is B";
  } else if (realAverage > 85 && realAverage < 90) {
    return "your mark is A";
  } else if (realAverage > 90) {
    return "congratulations your mark is A+";
  }
}

console.log(degree(grades));

//---------------------------------second way------------------------------------------------------------

function degree2(arr) {
  let sumPoints = arr.reduce((a, b) => a + b);
  let average = sumPoints / arr.length;
  let marks = ["A+", "A", "B", "C", "F"];

  if (average < 70) {
    return `your mark is ${marks[4]}`;
  } else if (average > 70 && average < 80) {
    return `your mark is ${marks[3]}`;
  } else if (average > 80 && average < 85) {
    return `your mark is ${marks[2]}`;
  } else if (average > 85 && average < 90) {
    return `your mark is ${marks[1]}`;
  } else if (average > 90) {
    return `your mark is ${marks[0]}`;
  }
}

console.log(degree2(grades));

//---------------------------------third way------------------------------------------------------------

function degree3(arr) {
  const num = arr.reduce((a, b) => a + b);
  const ave = num / arr.length;

  let one = ave < 70;
  let two = ave > 70 && ave < 80;
  let three = ave > 80 && ave < 85; // true
  let four = ave > 85 && ave < 90;
  let five = ave > 90;
  console.log(one, two, three, four, five);

  const newArr = [
    { uno: "F" },
    { dos: "C" },
    { tres: "B" },
    { cuatro: "A" },
    { cinco: "A+" }
  ];

  if ((one = true)) {
    return `you have an ${newArr.uno}`;
  } else if ((two = true)) {
    return `you have an ${newArr.dos}`;
  } else if ((three = true)) {
    return `you have an ${newArr.tres}`;
  } else if ((four = true)) {
    return `you have an ${newArr.cuatro}`;
  } else if ((five = true)) {
    return `you have an ${newArr.cinco}`;
  } else {
    return "else";
  }
}
console.log(degree3(grades));

//.........................................................................................................

function degree4(arr) {
  const num = arr.reduce((a, b) => a + b);
  const ave = num / arr.length;

  let one = ave < 70;
  let two = ave > 70 && ave < 80;
  let three = ave > 80 && ave < 85; // true
  let four = ave > 85 && ave < 90;
  let five = ave > 90;
  console.log(one, two, three, four, five);

  if (one == true) {
    return `you have an F`;
  } else if (two == true) {
    return `you have a C`;
  } else if (three == true) {
    return `you have a B`;
  } else if (four == true) {
    return `you have an A`;
  } else if (five == true) {
    return `you have an A+`;
  } else {
    return "else";
  }
}
console.log(degree4(grades));

//=================================EXERCISES=TEST=170220=========================================================

// 2. Validation
// Look at the unit tests for validating a pin. Create a function named "validPin" that fulfills the requirements of the tests.

// Requirements:
// 1. The pin code must consist of only numbers.
// 2. The pin code must be 4 digits long.
// 3. The pin should have at least two different digits.
// 4. The pin code's last digit should be even.
// 5. The pin code should add up to at least 5.
// 6. The function should print true if the pin meets all the requirements and false if it does not. Print your solution to the console.

// Expected Output
// validPin("1234"); → true
// validPin("1235"); → false // last number should be even
// validPin("wwww"); → false // should only consist of numbers
// validPin("12345"); → false // should be 4 digits, not 5
// validPin("2222"); → false // should have at least 2 different digits
// validPin("1000"); → false // does not add up to at least 5

function validPin(num) {
  let arrNum = num.split("");
  let numPin = 0;
  let numPinSum = 0;
  let lastNum = arrNum[arrNum.length - 1];
  console.log(lastNum);
  console.log(arrNum);
  for (let i = 0; i < arrNum.length; i++) {
    numPin = parseInt(arrNum[i]);
    // console.log(numPin);
    numType = numPin % 1 === 0;
    numPinSum = numPinSum += numPin;
    // console.log(numPinSum);
  }
  if (typeof numPin === typeof numType) {
    return true;
  } else if (arrNum.length === 4) {
    return true;
  } else if (arrNum[i] !== arrNum[i]) {
    return true;
  } else if (lastNum % 2 == 0) {
    return true;
  } else if (numPinSum > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(validPin("7346"));

//---------------------------------------------------------------------------------------------------------

// 2. Object to Array
// Convert an object into a nested array of key pair values. Look the example below.
// Given Object

// myObj = {
//   "1": 10,
//   "2": 20,
//   "3": 30
// };

// Expected Output:

// [
//   ["1", 10],
//   ["2", 20],
//   ["3", 30]
// ];

myObj = {
  "1": 10,
  "2": 20,
  "3": 30
};

console.log(Object.entries(myObj));

//..................................................................................................................

// 4. Hour Calculation

// Create a function called "calculateHours" which calculate how many hours (total) this person worked in the week based on the data structure
// hourTracking below. Note: start is always morning time, end is always afternoon. Print your solution to the console.

// Working Hours
// const hourTracking = [
//   { day: "Monday", start: 8, end: 17 },
//   { day: "Tuesday", start: 9, end: 15 },
//   { day: "Wednesday", start: 10, end: 18 },
//   { day: "Thursday", start: 7, end: 14 },
//   { day: "Friday", start: 6, end: 12 }
// ]
// Expected Output
// 36;

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

function calculateHours(obj) {
  let totalHours = 0;
  for (let i = 0; i < hourTracking.length; i++) {
    let objArr = Object.values(hourTracking[i]);
    // console.log(objArr);
    let dailyHours = objArr[2] - objArr[1];
    // console.log(dailyHours);
    totalHours += dailyHours;
  }
  return totalHours;
}
console.log(calculateHours(hourTracking));

//============================exercises==29-01-20===================================================

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with DE and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

function bankAccount(num) {
  let result = 0;
  let startArr = [];
  let restArr = [];
  let arr = num.split("");
  //   console.log(arr);
  restArr = arr.slice(2, arr.length);
  startArr.push(arr[0], arr[1]);
  //   console.log(restArr);
  //   console.log(startArr);

  for (let i = 0; i < restArr.length; i++) {
    if (restArr[i] % 1 === 0 && restArr.length === 20) {
      result++;
    } else {
      result--;
    }
  }

  for (let i = 0; i < startArr.length; i++) {
    if (startArr[0] === "D" && startArr[1] === "E") {
      result++;
    } else {
      result--;
    }
  }

  if (result === 22) {
    console.log("account valid");
  } else {
    console.log("account not valid");
  }

  return result;
}

let userData = "DE54006788867560000883";
bankAccount(userData);
