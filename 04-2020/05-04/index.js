let str4 = "Hadi";
console.log(str4.trim());
function print(str) {
  console.log(str);
}
print("Hadi");

console.log("----------------------------------------------------");

var firstNameArr = ["Ali", "Olga", "HAdi"];
console.log(firstNameArr.indexOf("Olga")); // if the name is in the list it will give the corresponding nr. (1 in this case)
console.log(firstNameArr.indexOf("Nancy")); // if the consoled name is not in the list then you get result -1

console.log("----------------------------------------------------");

let arrStringName = ["arraystringname"];
for (let i = 0; i <= 8; i++) {
  arrStringName[i] = `Hadi ${i}`;
}
console.log(arrStringName);

console.log("----------------------------------------------------");

let funArr = ["😎", "💪🏻", "😊"];
funArr.pop(); // in order to delete one item, it will be always the last one, brackets always empty, you don't enter a value in the brackets
funArr.shift(); // this will remove the very first element // no value inside the parenthesis
console.log(funArr);

let funArr2 = ["hello", "goodbye", "seeyou"];
funArr2.pop(); // in order to delete one item, it will be always the last one, brackets always empty, you don't enter a value in the brackets
funArr2.shift(); // this will remove the very first element // no value inside the parenthesis
console.log(funArr2);
