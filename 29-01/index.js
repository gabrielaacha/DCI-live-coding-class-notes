// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number

//------------------------------------------------------------------------------------------------------------------------

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function userSalNet(name, salary, ...kids) {
  let x = 0;
  for (let i = 0; i < kids.length; i++) {
    if (kids[i] == 1) {
      x = 30;
    } else if (kids[i] == 2) {
      x = 25;
    } else if (kids[i] > 2) {
      x = 20;
    } else {
      x = 55;
    }
  }

  let totalSal = (salary / 100) * x;
  return `The netto salary of ${name} per month is ${totalSal}€`;
}

console.log(userSalNet("pluto", 7000, "ff"));

//------------------------------------------------------------------------------------------------------------------------

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

// function phoneNum () {

// }

//------------------------------------------------------------------------------------------------------------------------

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

// function () {

// }

//------------------------------------------------------------------------------------------------------------------------

//============================RECAP======================================================================================

function display(random) {
  // let random = 0; // NEVER DO THIS // this is mistake, never declare the parameter as a variable // you are not meant to reassign, only modify, multiply, etc..
  let newArr = random.toLowerCase().split(""); // this is correct, you are just modifying not assigning new value
  console.log(newArr);
  return newArr;
  global += 2;
}
let newArr = 5;
console.log(display("Hi ma name")); // this is my return;
console.log(newArr); // this was local var for display function

//----------------------------------

// function display(random) {
//     // let random = 0; // NEVER DO THIS // this is mistake, never declare the parameter as a variable // you are not meant to reassign, only modify, multiply, etc..
//     // let newArr = random.toLowerCase().split(""); // this is correct, you are just modifying not assigning new value
//     // return newArr;
//     for (let i = 0; 0 < kids.length; i++) {

//     }
//   }
//   let newArr = 5;
//   display("ALi", "Nancy", "Olga");
//   console.log(newArr); // this was local var for display function
