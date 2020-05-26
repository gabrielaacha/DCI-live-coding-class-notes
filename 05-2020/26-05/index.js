// const args = process.argv.slice(2);

// function parseNum(arg) {
//   const number = parseFloat(arg);
//   if (isNaN(number)) {
//     console.log(`sorry ${arg} is not a number, please try again`);
//   }
// }

// function sum(sumArray) {
//   return numArray.reduce((sum, n) => sum + n, 0);
// }

// const [operation, ...rest] = args;

// const numbers = rest.map(parseNum);

// switch (operation) {
//   case "sum":
//     console.log(sum(numbers));
//     break;

//   default:
//     console.log(`I cannot do this, please type "sum" to calculate avg`);
// }

fs.writeFile("new.txt", "This is a text made by NodeJs", (err) => {
  if (err) throw err;
  console.log("Done");
});

//appenFile will create file
fs.appenFile("new2.txt", "Second file created by NodeJs", (err) => {
  if (err) throw err;
  console.log("Done");
});

//readFile will read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

//rename file
fs.readme("./hello.txt", "./hi.txt", (err) => {
  if (err) throw err;
  console.log("Done");
});

//delete file
const filePathName = "./hi.txt";
fs.unlink(filePathName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
