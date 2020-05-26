// console.log(process);
console.log(process.argv);

process.argv.forEach((item, i) => {
  console.log(`${i} : ${item}`);
});

const args = process.argv.slice(2);
console.log(args);
// let num = parseInt(args[0]);
// console.log(num);
// console.log(typeof num);
// let stars = "*".repeat(num);
// console.log(stars);
// console.log(`${args[0]}, ${args[1]}`);

function header(userNum, word) {
  userNum = parseInt(args[0]);
  word = args[1];
  let stars = "*".repeat(userNum);
  if (typeof userNum == "number" && typeof word == "string") {
    console.log(stars);
    console.log(word);
    console.log(stars);
  } else {
    console.log("*".repeat(15));
    console.log("hi");
    console.log("*".repeat(15));
  }
}

header();
