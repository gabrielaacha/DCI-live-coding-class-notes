// Create a function will calculate a student degrees for 6 subjects,
// 1-if the average was less than 70 will print (F)
// 2-Over 70 and less than 80 (C)
// 3-over than 80 and less than 85 (B)
// 4-Over than 85 and less than 90 (A)
// 5-And over 90 print (A+)

let grades = [74, 87, 80, 76, 87, 90];

function degree(arr) {
  let sumMarks = 0;
  let realAverage = 0;
  for (let i = 0; i < arr.length; i++) {
    sumMarks = sumMarks += arr[i];
    realAverage = Math.floor(sumMarks / arr.length);
  }
  if (realAverage < 70) {
    return "sorry your mark is F";
  } else if (realAverage > 70 && realAverage < 80) {
    return "your mark is C";
  } else if (realAverage > 80 && realAverage < 85) {
    return "your mark is B";
  } else if (realAverage > 85 && realAverage < 90) {
    return "your mark is A";
  } else if (realAverage > 90) {
    return "congratulations your mark is A+";
  }
}

console.log(degree(grades));
