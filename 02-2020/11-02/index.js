const arr = [
  [2, 3, 4],
  [533, 53],
  [356, 222, 8]
];
console.log(arr[1][1]);
console.log(arr[2][1]);

// nested loops

console.log("---------nested for let loop--------------------------");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//.............................................................................
//..........nested arrays.....................................................
console.log("---------for let loop--------------------------");
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([33, 56]); // the parenthesis will push a nested array
  }
}
//.......................................................................................................................................
console.log("---------forEach--------------------------");
arr.forEach(array => array.forEach(element => console.log(element))); // its call back, i have to pass a function in the parameter
// by the nested loop it allows to pick single elements // one element at a time.
// this double method-ES6 is used for complex and nested arrays, for single ones you only need one.
// forEach is picking individual elements in the array and displaying them as such
console.log(arrayNew);

//.......................................................................................................................................

console.log("---------forEach--map--------------------------");
let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name));
names.map(name => console.log(name)); // map will create another array

//.......................................................................................................................................

console.log("---------for let loop--------------------------");
let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
]; // nested array
for (let i = 0; i < family.length; i++) {
  // console.log(family[i]); // expected outcome: [ 'Ali', 22, 'teacher' ] [ 'Olga', 40, 'chef' ]
  for (let j = 0; j < family[i].length; j++) {
    // the [i] is because the indexes in this case are arrays
    console.log(family[i][j]);
  }
}
// these nested loops are a bit old fashioned, now you would use ES6 style (forEach...):
//.......................................................................................................................................
console.log("---------forEach--------------------------");
family.forEach(arr => arr.forEach(element => console.log(element))); // this is also nested and more broadly used

//..........for of...............................................................................................

console.log("---------for of--------------------------");
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}

//..................nested objects................................................................................
console.log("---------nested--objects--and--arrays-------------");
const tShirt = {
  color: "red",
  size: ["S", "M", "L", "XL"],
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    obj: {
      one: 23234324,
      two: 827318913,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  }
};

console.log(tShirt.size[2]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.name[0]);
console.log(tShirt.countries.obj.two);
console.log("---------compact ways to call the function-------------");
tShirt.method();
tShirt.countries.display(); // inside countries
tShirt.countries.obj.printOut(); // inside obj
let newShortWay = tShirt.countries; // its referencing but its not copying it // if you have to call the function many times it solves a lot of time
newShortWay.display();

//.............nesting and accessing arrays in objects....................................................................
console.log("---------nesting and accessing arrays in objects-------------");
let car = ["ford", "pink", 2020, "eng", "xs"];
// let carName = car[0];
// let carColor = car[1];
let [carName, carColor, carYear, ...rest] = car;
console.log(carName); // expected outcome: ford
console.log(rest); // expected output: [ 'eng', 'xs' ]
console.log(car); // expected output: [ 'ford', 'pink', 2020, 'eng', 'xs' ]

//.............nesting and iterating over objects in arrays................................................................
console.log(
  "---------nesting and iterating over objects in arrays-------------"
);
const object = {
  firstName: "Ali",
  old: 22,
  country: "Germany"
};
({ firstName, old, country } = object); // destructuring the object, this is teh syntax for an object
// this line is needed in order for the console.log to recognize where the variable/object os located
console.log(object.firstName);
console.log(object);
console.log(firstName);

//========================Exercise==fake==test================================================================================

// Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays:
// one for the keys of the object and the other for the values of the object.
console.log(
  "----------------first exercise---------------------------------------"
);

function obj(one, two) {
  let arr1 = [];
  let arr2 = [];
  let result = [arr1, arr2];
  const fridge = {
    liquid: "juice",
    food: "pickles"
  };
  arr1.push(Object.keys(fridge));
  arr2.push(Object.values(fridge));

  return result;
}

console.log(obj());

//-----------------------------------------------------------------------------------------------------------------------------

// Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// Examples:
// isWaldoHere("is there wal here ?") ➞ false isWaldoHere("I found you Waldo!") ➞ true isWaldoHere("is wally here?")
// ➞ false isWaldoHere("waldo is here") ➞ true
console.log(
  "----------------second exercise---------------------------------------"
);

function isWaldoHere(str) {
  let plainStr = str.toLowerCase().split(" ");
  console.log(plainStr);
  for (let i = 0; i <= plainStr.length; i++) {
    if (plainStr[i] === "?" || plainStr[i] === "not") {
      return false;
    } else {
      return true;
      // }
    }
  }
}
console.log(isWaldoHere("is there wal here ?")); // false
console.log(isWaldoHere("I found you Waldo !")); // true
console.log(isWaldoHere("is wally here ?")); // false
console.log(isWaldoHere("is there wal here ?")); // false

//-----------------------------------------------------------------------------------------------------------------------------

// isPrime? Create a function that returns true if a number is prime and false if it's not.
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples:
// isPrime(7) ➞ true isPrime(9) ➞ false isPrime(10) ➞ false
console.log(
  "----------------third exercise---------------------------------------"
);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
  //   let prime = num > 1 && num % num === 0 && num % 1 === 0;
  //   console.log(prime);
  //   // prime.push(result);
  //   return prime;
}
// let i = 2;
// while(i < num){
//     if (num % i == 0){
//         return false
//     }
//     i++;
// return num > 1;

/**
 * first interaction i: 2 num: 7 | 2 < 7 (true) 7 % 2 ==
 * second interaction i: 3 num 7 | 3 < 7 (true) 7 % 3 ==
 * last interaction i:
 */

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
console.log(isPrime(10)); // false
console.log(isPrime(14)); //
console.log(isPrime(12)); //
console.log(isPrime(17)); //

//-----------------------------------------------------------------------------------------------------------------------------

// For the longest word. Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course") ➞ "development"
console.log(
  "----------------fourth exercise---------------------------------------"
);

function longestWord(word) {
  let result = "";
  let splitWord = word.toLowerCase().split(" ");
  console.log(splitWord);
  for (let i = 0; i <= splitWord.length; i++) {
    let test2 = splitWord.find(long => long.length > splitWord.length);
    console.log(test2);
    return result;
  }
}

longestWord("this is a web development course"); // ➞ "development"

//-----------------------------------------------------------------------------------------------------------------------------
