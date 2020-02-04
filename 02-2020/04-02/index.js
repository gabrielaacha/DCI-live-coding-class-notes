// anything in javascript is an object /7 there are three types of formulating objects
//..................
// keys, properties : value (sometimes named methods instead of property) / key is how variables are called here // lettering
const o = {
  1: "Hadi",
  2: "Ali",
  3: "olga"
};
//...............
const obj = {
  // i use const to prevent other people to change name of the variable, etc
  name: "nancy",
  lastName: "saaaa",
  age: 44,
  address: "xxx str"
};
// i don't need this really:
let aliName = "Ali";
let aliAdd = "xxx str";
let aliAge = 22;
let aliLastName = "something";
// we do this to look for storage keeping related data together
//........const <namespace> = { <key> : <value 1>, <key2>: <value 2>,...} // assigning.....................................
const object = {
  color: "red",
  size: "big",
  year: 1990,
  arr: [1, 2, 3, 4, 5, 6, 7]
}; // key column value data
//....accessing properties with [bracket notation].........................................................................
const car = {};
console.log(car);
car["name"] = "Ford";
console.log(car);
car["year"] = 2020;
console.log(car);
//..................
//Accessing properties with [dot notation]
car.age = 22; // there is no difference between bracket notation and dot notation
car.age = 44; // this will overwrite the previous age
console.log(car); // expected outcome:
// { name: 'Ford' }
// { name: 'Ford', year: 2020 }
// { name: 'Ford', year: 2020, age: 44 }
console.log(car.name); // this will come up just with the value
console.log(car["name"]); // this will give the same answer as above // up to each one which ine to use
// when we assign new stuff go for the bracket situation
//..................creating new object:
const save = new Object();
const arr1 = new Array();
console.log(save);
// expected outcome: empty object
console.log(car.name);
console.log(car);
//...................for.............................................................................................
// we have fofr for objects but it looks a bit different than what we saw so far
for (let prop in car) {
  // prop for properties, we can name it as we want
  console.log(`car.${prop} : ${car[prop]}`);
}
//...............object.entries()...................................................................................
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  print: function() {
    console.log(
      `this user ${person.name} his birth year is ${person.birthYear}` // i am able to look inside of my object from the string
    );
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};
//................object.keys.......................................................................................
console.log(Object.keys(person)); // expected outcome : [ 'name', 'age', 'birthYear' ]
//..................
// to access the key names and not the values :
console.log(Object.values(person)); // expected outcome ; [ 'Zain', 20, 2000 ]
//..................
// if I wanna access both of them : object.entries()
for (let [key, value] of Object.entries(person)) {
  // now we have for of (instead of for in)
  console.log(`${key} : ${value}`);
}
//.................. methods.........................................................................................
// when the property is a function you call it methods
person.print(); // this is the function call for the previous function // print: function() {}
console.log(person.old());

//==============================EXERCISE===============================================================================

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person2 = {
  profession: "programmer",
  destination: "peru",
  vacationDays: 10
};

for (let prop in person2) {
  console.log(`person.${prop} : ${person2[prop]}`);
}

//=========================================================================================================================

//.......object assign....................................................................................................
// to copy two objects and put them in another object
const obj1 = { 1: 2, 2: 300 }; // this is the source
const obj2 = { 1: 4, 3: 3224 }; // this is the target
const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
console.log(totalObj);
// expected outcome: { '1': 4, '2': 450, '3': 3224, '4': 55, '5': 980 }

//==============================EXERCISE===============================================================================

// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
// choice1: "tea",
// choice2: "coffee",
// choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

const getObjectValues = {};
(getObjectValues["choice1"] = "tea"),
  (getObjectValues["choice2"] = "coffee"),
  (getObjectValues["choice3"] = "milk"),
  console.log(Object.values(getObjectValues));

//.......................Hadis solution..............................................................................

const getValues = object => {
  return Object.values(object);
};
console.log(getValues(person));
console.log(getValues(car));

//...................................................................................................................

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
// firstName: "Ali",
// job: "painter",
// age: 20,
// city: Berlin
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

// const person3 = {
//   age: 20,
//   firstName: "Ali",
//   job: "painter",
//   city: "Berlin",
//   print: function() {
//     console.log(`Ali is a ${age} year old ${job} in ${city}`);
//   }
// };
// console.log(person3.print());

//.......................Hadis solution..............................................................................

// const person3 = {
//     age: 20,
//     firstName: "Ali",
//     job: "painter",
//     city: "Berlin",
//     person3.printOut = () => {
//   return `Ali is a ${person3.age} year old ${person3.job} in ${person3.city}`;
// }
// };
// console.log(person3.printOut());

//=========================================================================================================================

//..........Object.defineProperty().....................................................................................
Object.defineProperty(person, "birthDay", {
  // calling my object, 1st parameter is object name, the second is the prop name and the last has the value of the property that i am creating
  value: 20,
  writable: false // with this i wont be able to change the parameter even if i introduce a new value
  //writable: true // if its true i can skip this
});
console.log(person.birthDay);

//..........Object.defineProperties()......................................................................................
Object.defineProperties(person, {
  // first parameter is the object and second parameter the values you are passing
  p1: {
    value: "hella",
    writable: true // you can overwrite
  },
  p2: {
    value: 30,
    writable: false // cant overwrite
  },
  p3: {
    value: "hello"
  }
});

console.log(person.p3); // these properties would add up to the already existent ones

//=======================EXERCISE=============================================================================================

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
// name: "Mike",
// class: "4A"
// course: "English"
// }
// Expected output:
// ["name", "class", "course"]

const student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

console.log(Object.getOwnPropertyNames(student));

//....................Hadis solution..................

const getProperties = obj => {
  return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));

// expected output  : [
// 'name',      'age',
// 'birthYear', 'print',
// 'old',       'birthDay',
// 'p1',        'p2',
// 'p3'
// ]

//....................................................

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// console.log(arrSpliting("small"));

function countLetters(str) {
  // const letArr = [];
  const word = str.toLowerCase().split("");
  console.log(word);
  const objObj = {};

  for (let i = 0; i < word.length - 1; i++) {}

  //   for (let prop in word) {
  //     console.log(`${word[prop]} : ${prop}`);
  //     word.push(letArr);

  for (let [key, value] of Object.entries(word)) {
    const valueKey = `${value} : ${key}`;
    //objObj.push(valueKey);
    Object.assign(valueKey);
    return valueKey;
  }
}

countLetters("tree");

// const obj1 = { 1: 2, 2: 300 }; // this is the source
// const obj2 = { 1: 4, 3: 3224 }; // this is the target
// const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
// const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
// console.log(totalObj);

//...............Hadis solution....................

function countLetters(str) {
  let arr = str.split("");
  console.log(arr);
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == letter) {
        counter++;
        // console.log(counter);
      }
    }
    return counter;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; //
    result[currentChar] = countOccurrences(str, currentChar); // here assigning the key / property with the bracket notation // inner function // object part
  }
  return result;
}

console.log(countLetters("tuesday"));

//...................................................
