// what is NodeJs

// why NodeJs
// connected code from the front end to the back end, you can use the same technical things for both
// lighter stronger and more reliable than java or other codes. most companies do NodeJs now

//everything runs through terminal
// process object
// fs /file system) built-in module in NodeJs
// this will print a whole object:
// console.log(process);
// console.log(process.argv);
// console.log(`Hey ${process.argv[2]}`);
// https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv
process.argv.forEach((item, i) => {
  console.log(`${i} : ${item}`);
});

const args = process.argv.slice(2);
console.log(`Hey ${args[0]}`);

// manipulate and delete files in the machine
const fs = require("fs");
// read file
// its a call back function
// always control the error first because you dont know the environment
fs.readFile("./text.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// write file
fs.writeFile("new.txt", "This is a text created in nodeJs", (err) => {
  if (err) throw err;
  console.log("Done");
});
// console.log("Hi this is a random text");
