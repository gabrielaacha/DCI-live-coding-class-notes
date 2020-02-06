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
//conaole.lognewUser("Ali", "G", 34, { dance: "two" }); // you can pass also objects, basically anything

// let x = newUser("Ali", "G", 34, "dance"); // this turns x into the value of the functions result.
// console.log(x);
// console.log(x.printOut); // you can select any property in the object

//......................................

let arr = [2, { name: "Ali", age: 22 }, 6];
console.log(arr[1]["age"]);
console.log(arr[1].age);

// Object.getOwnPropertyNames

// clones vs. references

// Simple values are always clones

// primitive

// string number boolean
