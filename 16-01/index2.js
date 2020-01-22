// @@@@
// @@@
// @@
// @

let box3 = "";
let i = 1;
let result = box3 * i;
for (let i = 1; i <= 4; i++) {
  box3 += "@ \n";
}
console.log(result);

// let box = "";
// for (let i = 0; i <= 4; i++) {
// box += "XXXX \n"; // it will add to the current element whatever you had before
// }
// console.log(box);

// T
// TT
// TTT
// TTTT

let y = "T";
let result2 = 0; // this is declared but the value is not so important, just the declaration, to avoid problems better to declare 0
while (y <= 4) {
  result2 = y * 4;
  console.log(`${y} * 4 = ${result2}`);
  y++; // very important to not forget this in order to stop the forever repetition
}

let x = 3;
if (x <= 10) {
  x += 1;
} else {
  x -= 1;
}

while (x <= 10) {
  console.log("T");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

// 1, 2, 4, 8... 128 //

for (let i = 1; i < 128; ) {
  // i++ or i-- go inside the brackets, othrwise outside
  console.log(i);
  i = i * 2;
}

// 0, 2, 4... 10  // SOLVED

for (let e = 0; e <= 10; e++) {
  if (e % 2 == 0) {
    console.log(e);
  }
}

for (let t = 0; t <= 10; ) {
  console.log(t);
  t += 2;
}

// 3, 6, 9 ... 15 // SOLVED

let counterSum1 = 0;
for (let a = 3; a <= 15; a++) {
  if (a % 3 == 0) {
    console.log(a);
    counterSum1 += a;
  }
}

// 9, 8, 7... 0 // SOLVED

let count = 9;
while (count >= 0) {
  console.log(count);
  count--;
}

// hadis solution
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4 // SOLVED

let resultx = 0;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    resultx = i;
    console.log(`${i}`);
  }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 // SOLVED

let result3 = 0;
for (let i = 0; i <= 4; i++) {
  for (let i = 0; i <= 4; i++) {
    result3 = i;
    console.log(`${i}`);
  }
}


// hadis:
let counter = 0;
for (let i = 0; )
