// @@@@
// @@@
// @@
// @

let count = 4;
while (count >= 1) {
  if (count == 4) {
    console.log("@@@@");
  } else if (count == 3) {
    console.log("@@@");
  } else if (count == 2) {
    console.log("@@");
  } else if (count == 1) {
    console.log("@");
  }
  count--;
}

//hadis

let atbox2 = "@@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(atbox2.slice(i));
}

// let box = "";
// for (let i = 0; i <= 4; i++) {
// box += "XXXX \n"; // it will add to the current element whatever you had before
// }
// console.log(box);

// T
// TT
// TTT
// TTTT

//let box = "";
// for (let y = 1; i <= 4; i++) {
// if (y == 1) {
//   console.log("TTTT");
// }
// if (y == 2) {
//   console.log("TT");
// } else if (y == 3) {
// console.log("TTT");
//} else if (y == 4) {
//   console.log("TTTT");
// } else {
//  console.log("else");
// }//
//}

// let result2 = 0; // this is declared but the value is not so important, just the declaration, to avoid problems better to declare 0
// while (y <= 4) {
//  result2 = y * 4;
// console.log(`${y} * 4 = ${result2}`);
// y++; // very important to not forget this in order to stop the forever repetition

let x = 1;
if (x <= 4) {
  x += 1;
} else {
  x -= 1;
}

while (x <= 2) {
  console.log("T");
  x++;
}

while (x <= 3) {
  console.log("TT");
  x++;
}

while (x <= 4) {
  console.log("TTT");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

while (x <= 5) {
  console.log("TTTT");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

// hadis:

let Tbox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 9; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      Tbox += "T";
      console.log(Tbox);
    }
  }
} // replies here:  https://github.com/FBw-26/live-coding/blob/master/16-01/index.js
