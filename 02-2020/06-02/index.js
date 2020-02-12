function newUser(fName, lName, age, hope) {
  // outer function
  let result = {
    // i have to write this variable inside of the function cause the values are coming from the function parameters, outside would not work
    firstName: fName,
    lastName: lName, // here you are assigning a parameter that is coming from outside / in this case from the function call
    old: age,
    funThingsToDo: hope,
    printOut: function() {
      // this is inner function as method, this lives inside of the outer function
      return `Hey ${this.firstName}, you are ${this.old} years old`; // this is the inner return (the inner function must have return)
    } // whenever I use "this" I have to use the old school function situation (means this current object that I am dealing with)
  };
  //   result.printOut(); // here we are executing the method of that function
  //   return result; // this is the outer return for the outer function
  return result.printOut(); // also valid
}

console.log(newUser("Ali", "G", 34, "dance")); // i can also have an array in here
//console.lognewUser("Ali", "G", 34, { dance: "two" }); // you can pass also objects, basically anything

// let x = newUser("Ali", "G", 34, "dance"); // this turns x into the value of the functions result.
// console.log(x);
// console.log(x.printOut); // you can select any property in the object

//......................................

let arr = [2, { name: "Ali", age: 22 }, 6];
console.log(arr[1]["age"]); // will grab the object property within the array // bracket notation
console.log(arr[1].age); // will grab the object property within the array // dot notation

//==============================Guest teacher===================================================================================

//---------------------Array methods-------------------------------------------------------------------------------------------

// searching for an array method

// adding and removing elements

// changing the entire array

// iterating over the array

// exercises

// exercise --> find and filter
const animals = ["cat", "bird", "dog", "worm"];
const names = "01.09.1989";
// first animal with more than 3 letters

// → find(predicate) // define a test that determines ehat the right elemnt is / i will find the elements values
// [3,4,5].find(e => e === 4)/ specifying what you are looking for (i want to find the element that is equal to 4).
// when it returns true then js knows that’s the element

let x = names.split(".");
console.log(x);

animals.find(animal => animal.length > 3);
console.log(animals);

animals.filter(animal => animal.length === 3);
console.log(animals);

//==============================================================================================================================

let arr1 = [
  { 1: "Ali", age: 22 },
  { 1: "Ali", age: 22 },
  {
    1: "Olga",
    sum: function() {
      return "Hi";
    }
  }
];

console.log(arr1[2].sum()); // this is executing the index 2 within the array, and within it the second key (.sum()).
console.log(arr1[2]["sum"]()); // if there are more methods in the objects inside the array all methods have to be called, just change the index number in the call
// call array
// which indexes
// say property name, which is a method

//==========================Exercise=======================================================================================

// Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

let person = {
  name: "Ali",
  job: "teacher"
};

function keysToValues(obj) {
  const keysValuesPair = Object.entries(obj); // it will take my parameter
  console.log(keysValuesPair); // [ [ 'name', 'Ali' ], [ 'job', 'teacher' ] ]
  let reversArr = [];
  for (let i = 0; i < keysValuesPair.length; i++) {
    reversArr.push(keysValuesPair[i].reverse()); // this will make:
  }
  console.log(reversArr); // expected outcome: [ [ 'Ali', 'name' ], [ 'teacher', 'job' ] ]
  console.log(Object.fromEntries(reversArr)); // expected outcome: { Ali: 'name', teacher: 'job' }
}

keysToValues(person);

//

// Object.getOwnPropertyNames

// clones vs. references

// Simple values are always clones

// primitive

// string number boolean

let arr3 = [2, { name: "Ali", age: 22 }, 6];
console.log(arr3[1]["age"]); // will grab the object property within the array // bracket notation // expected outcome : 22
console.log(arr3[1].age); // will grab the object property within the array // dot notation // expected outcome : 22
