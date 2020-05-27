const args = process.argv.slice(2);
console.log(args);

// function parseNum(arg) {
//   const number = parseFloat(arg);
//   if (isNaN(number)) {
//     console.log(`sorry ${arg} is not a number, please try again`);
//   }
// }

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

const [operation, ...rest] = args;
const numbers = rest.map(parseNum);
sum 3 5 6 kdfjb
avg 45 6 67

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  case "mid":
    // console.log(mid(numbers));
    break;

  default:
    console.log(`I cannot do this, please type "sum" to calculate avg`);
}
