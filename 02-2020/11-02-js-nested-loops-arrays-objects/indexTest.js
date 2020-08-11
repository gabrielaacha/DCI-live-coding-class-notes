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
      return "false";
    } else {
      return "true";
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
  let result = 0;
  let prime = num > 1 && num % num === 0 && num % 1 === 0;
  // prime.push(result);
  return prime;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));

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
