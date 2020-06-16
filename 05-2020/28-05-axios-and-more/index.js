const { sum } = require("./script");
const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);
console.log(args[0][1]);

// args.forEach((str) => console.log(str));

function word(str) {
  let x = str.toString().toLowerCase();
  console.log(x);
  console.log("------------------------------");
  let y = x[0];
  console.log(y.toUpperCase());
  console.log("------------------------------");
  //   for (let i = 0; i < x.length; i++) {
  //     console.log(x[i]);
  console.log("------------------------------");
}

console.log(word(args));

// function hello(str) {
//   console.log(str.split(""));
// }

// hello(args);

// let y = parseFloat(args[1]);
// console.log(`city name = ${prepareString(x)}`);
// console.log(`x - y = ${sub(x, y)}`);
if (args.includes("--help")) {
  showHelp();
}

// /*
//  in script.js you have function called prepareString. This function should take a string as a parameter, and return it with only the first letter capitalized.
// Example output:
// 'europe' => 'Europe'
// 'BERLIN' => 'Berlin'
// 'aSIa' => 'Asia'
