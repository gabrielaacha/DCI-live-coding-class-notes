//================================RECAP====================================================
//............object literal context.......................................................
// objects are stored united data in a same place(variable)
// we can have properties and methods

const o = {
  name: "Ali",
  age: 22,
  add: "xxx str."
};

// property accessors
// if i wanna access i would say:

o.name;
o.age;
// this is called dot notation

o["name"] = "Ali G";
// this is bracket notation

//...................object keys...........................................................
// if you wanna check the keys in that object you would say:
console.log(Object.keys(o)); // expected result --> [ 'name', 'age', 'add' ]

//to get the values:
console.log(Object.values(o)); // expected result --> [ 'see str.', 22, 'xxx str.' ]

//.............methods......................................................................
o.print = function() {
  console.log(`Hi ${o.name} you are a nice person that lives in ${o.add}`); // dot notation
  console.log(
    `Hi ${o["name"]} you are a nice person that lives in ${o["add"]}`
  ); // bracket notation
};
o.print(); // important to call the function

//......

function userData(userName, userAge, userAdd) {
  const obj = {
    name: userName,
    age: userAge,
    add: userAdd,
    outPut: function() {
      console.log(
        `Hi ${this.name} you are very nice ${this.age} years old and you live in ${this.add}` // this is a preserved tag (any object that you are dealing with in the current moment)
      );
    }
  };
  return obj;
}
userData("olga", 40, "seestrasse");

// object prototype.hasOwnProperty()
const person = {
  height: 177,
  age: 34,
  city: "Berlin"
};
console.log(person.hasOwnProperty("sss")); // expected outcome : false
console.log(person.hasOwnProperty("age")); // expected outcome : true

// Object.getOwnPropertyNames

//========================================Exercise=======================================================================

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

const first = { firstName: "John" };
const second = { secondName: "Smith" };

function para(object1, object2) {
  return (totalObj = Object.assign(object1, object2));
}

console.log(para(first, second));
// expected outcome : { firstName: 'John', secondName: 'Smith' }

//.................................Hadis solution........................................................................

const fun = (x, o) => {
  return Object.assign(x, o);
};

const o1 = { name: "Ali" };
const o2 = { lastName: "G" };

console.log(fun(o1, o2)); // function call
console.log(fun({ name: "Ali" }, { lastName: "G" }));
// you can pass a variable or a complete parameter, it's the same

//.....

const fun2 = (x, o) => {
  const result = { ...x, ...o }; // this result will be an object / spread operator will copy an object or an array and it can be used any time
  return result;
  // the function is returning an object (instead of a variable)
};
const o3 = {
  something: "ccc"
};

console.log(fun({ name: "GG", age: 33 }, { lastNAme: "Allin" }));
// expected outcome: { name: 'GG', lastNAme: 'Allin' }

//========================================================================================================================

// userName
// birthday
// birthmonth
// birthyear

// const userName: "peter",
// const birthDay: 17,
// const birthMonth: "September",
// const birthYear: 1903

//..........................

function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDate: day,
    birthMonth: month,
    birthYear: year
  }; // i am assigning the parameter to the object, it is coming from outside

  const starsign = {
    0: aries,
    1: taurus,
    2: gemini,
    3: cancer,
    4: leo,
    5: virgo,
    6: locationbar,
    7: scorpio,
    8: sagitarius,
    9: capricorn,
    10: acuarius,
    11: piscis
  };

  console.log(
    `hadi was born on the ${day}.${month}.${year} and his starsign is ${starsign}`
  );
  return result;
}

zodiac("Hadi", 01, "09", "1989");

// Aries Mar. 21 - April 19 (month == 2 && )
// Taurus April 20 - May 20
// Gemini May 21 - June 21
// Cancer June 22 - July 22
// Leo July 23 - Aug. 22
// Virgo Aug. 23 - Sept. 22
// Libra Sept. 23 - Oct. 23
// Scorpio Oct. 24 - Nov. 21
// Sagittarius Nov. 22 - Dec. 21
// Capricorn Dec. 22 - Jan. 19
// Aquarius Jan. 20 - Feb. 18
// Pisces Feb. 19 - Mar. 20

//............................................................

function monthCheck(string) {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let winter = ["december", "january", "february"];
  let spring = ["march", "april", "may"];
  let summer = ["jun", "july", "august"];
  let autumn = ["september", "october", "november"];
  const currentSeason = monthToLook => {
    let seasonName = "";
    if (winter.includes(monthToLook)) {
      seasonName = seasons[0];
    } else if (spring.includes(monthToLook)) {
      seasonName = seasons[1];
    } else if (summer.includes(monthToLook)) {
      seasonName = seasons[2];
    } else if (autumn.includes(monthToLook)) {
      seasonName = seasons[3];
    } else {
      seasonName = "Sorry something went wong";
    }
    return seasonName;
  };
  //console.log(months);
  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      let currentWord = strToArray[i];
      result += `You have entered ${currentWord}, which is in
             ${currentSeason(currentWord)}. `;
      counter++;
    }
  }
  if (counter == 0) {
    result = `Sorry, I didn't find any months in your text.`;
  }
  return result;
}
console.log("monthCheck");

console.log(monthCheck("hi is jun"));
console.log(monthCheck("Hi hi is"));
