// ES6 system uses => instead of the function word. it is assigning the function result to a variable. var sum = function(z,s){}

const sum = (x, y) => {
  return x + y;
};

sum(5, 4);

// Array.map(value, index =>{} // creates a new array
// its not about naming system but about the order
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map((name, index) => name[0] == "0");
console.log(newArr);

// below the updated ES6 system:
// its a call back situation
names.forEach((name, index) => console.log(name + " index num = " + index));

//old system below:
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " index num = " + i);
}

// Array.reduce()
// const reducer = (acc, cur) => acc + value;
// its also a call back function

const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc (accumulator) + cur (current value) // acc = 0 and cur = 1 in the first round
console.log(numArr.reduce(reducer));

console.log(numArr.reduce(reducer, 100)); // syntax of ES6, its a number to start in the accumulator

// call stack
// 6000 max. of functions inside functions

function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  return "Hi";
}

console.log(first(callback(callTwo()))); // up until 6000 functions

// our bff
function display(str) {
  console.log(str);
}

//turns into...

const print = str => console.log(str);
print("hadi");

// function <name>(<parameter>){...}
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val);
}

yellow(2, 3); // you call the function follow by the executing situation
// parameters are values used inside of the function, value comes when i apply my function call
// when i have two parameters i separate them with a comma

function pink(name, age) {
  console.log(`Hi ${name}, you are young ${age}`);
}

pink("Ali", 20);

yellow(2, 3);
const AliPets = ["Dyson", "Sofi"];
function pink(name, array, age = 10) {
  // in case someone will not enter age the default value will be 10, default value at the end
  console.log(`Hi ${name}, you are young ${age}, you hace nice pets ${array}`);
}

pink("Ali", AliPets, 20);
pink("Ali", 20, ["Dyson", "Sofi"]); // very important to follow the order and not skip any value

// ES6 system would be
const pink2 = (name, array, age = 10) => {
  console.log(`Hi ${name}, you are young ${age}, you hace nice pets ${array}`);
};

pink2("Ali", AliPets, 20);
pink2("Ali", 20, ["Dyson", "Sofi"]); // very important to follow the order and not skip any value

const greeting = (nam, add, age, pla) => {
  // not able to change the variable anymore
  age += 20; // this is implemented into the initial value, it would to the existing value, in this case 20 + 10add up
  nam += ",";
  pla += " DE";
  add += "";
  return `Hey ${nam} it is very nice to live in ${add} you are getting older too fast ${age}, in your old ${pla}`; // return will give me the result
};
console.log(greeting("Ali", "xx str", 10, "Berlin")); // this is the initial value, the function call

// create a function without parameter and without return:
const add = () => {
  let x = 1120 * 3;
  console.log(x);
};

add(); // this is the function call, without it is not executing at all // functions, array and objects always needs const

// variables in function

//_________________________________________________________________________________________________________________________________________

//EXERCISES

// 1. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// --> For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// --> If the number cannot be divided evenly by 4, simply return the number.
// --> The given integer will always be equal to or greater than 1.
// --> Include the given number (the number in the parameters).
// Examples:
// --> amplify(4) ➞ [1, 2, 3, 40]
// --> amplify(3) ➞ [1, 2, 3]
// --> amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

function amp(arr) {
  let result2 = [];
  let mulBy4 = result2 * 10;
  for (let i = 0; i < arr.length; i++) {
    if (amp[i] % 4 == 0) {
      result2 = mulBy4;
    } else {
      result2 = [i];
    }
  }
  return result2;
}

console.log();

//---Hadi's solution-----------

function amp(num) {
  let result = [];
  let ampTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampTen = i * 10;
      result.push(ampTen);
    } else {
      result.push(i);
    }
    return result;
  }
}
console.log(amp(4)); // the value is given in the function call and this will generate the new array


// ----ES6 version-------------

const amp2 = num => {let result = [];
  let ampTen = 0;
  for (let i = 1; i <= num; i++){
   if (i % 4 == 0) {
       ampTen = i * 10;
       result.push(ampTen);
  
   }else {
  result.push(i);
  
   }
   return result;
  }   
  console.log(amp2(4));
  


//---------------------------

// 2. One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// --> unique([3, 3, 3, 7, 3, 3]) ➞ 7
// --> unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// --> unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

// let uniNum = [3, 4, 5, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9];
// let unlike = uniNum.map(uniNUm.find(num, index => num ^ uniNUm));
// console.log(unlike);

//------hadis solution--------------

function  unique(arr){
  let currentValue = 0;
  let current = []; // we have 2 arrays at first ( current and remainder)
  let remainder = []; // we have 2 arrays at first (current and remainder)
  for (let i = 0; i < arr.length; i++) {
      if(current.length == 0 || current[0] == arr[i]){
          current.push(arr[i]);
          currentValue ++; // currentValue = currentValue + 1;

      } else if (current[0] !== arr[i]){
          remainder.push(arr[i]);
      }
  }
  
  if (currentValue === 1) {
      return currentValue[0]

  } else {
      return remainder[0];

}
}

let arr = [1,1,1,1,1,4,1,1,1,1,1,1];
console.log(unique(arr));

//_________________________________________________________

let p = 0;
p++ // or ++p the result would be 1 
let c = p;
console.log(c);
