// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentD(...avg) {
  // let degrees = [];
  let average = 0;
  let sum = 0;
  for (let i = 0; i < avg.length; i++) {
    sum = sum += avg[i];
  }

  console.log(sum);

  average = sum / avg.length;
  console.log(average);

  if (average > 70 && average < 80) {
    console.log("C");
  } else if (average > 80 && average < 85) {
    console.log("B");
  } else if (average > 85 && average < 90) {
    console.log("A");
  } else if (average > 90) {
    console.log("this is an A+");
  } else {
    console.log("this is an error");
  }

  return average;
}

studentD(78, 90, 67, 86, 83, 73);

//--------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function strAndWord(strand, word) {
  let wordStrand = 0;
  let wholeWord = 0;
  let strandToArr = strand.toLowerCase().slice("");
  console.log(strandToArr);
  let wordToArr = word.toLowerCase().slice("");

  // for (let i = 0; i < wordToArr.length; i++) {
  //   if (strandToArr.length == wordToArr[i][0]) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }
}

console.log(wordToArr);

strAndWord("be", "Belgium");
