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
    birthYear: year,
    starSigns: function() {
      let signs = [
        { astro: acuarius, from: 0120 },
        { astro: piscis, from: 0219 },
        { astro: aries, from: 0321 },
        { astro: taurus, from: 0420 },
        { astro: gemini, from: 0521 },
        { astro: cancer, from: 0622 },
        { astro: leo, from: 0723 },
        { astro: virgo, from: 0823 },
        { astro: libra, from: 0923 },
        { astro: scorpio, from: 1024 },
        { astro: sagittarius, from: 1122 },
        { astro: capricorn, from: 1222 }
      ];
    }
  };
  let x = day + month;
  // let y = result.starSigns.signs.find(sign => sign < signs.from());
  return x;
  //   let x = 0;
  //   for (let i = 0; i < starSigns.signs.length; i++);
  //   if (x > signs[i].from()) {
  //     console.log(signs[i]);
}

console.log(x);

// zodiac("Hadi", 01, "09", "1989");
// console.log(`signs ${signs.astro} : ${signs.from}`);
// console.log(
//   `hadi was born on the ${day}.${month}.${year} and his star sign is ${starSign.astro}`
// );

// Aries Mar. 21 - April 19 (month == 2 && date >= 21 && date <=31) || (month === 3 && date >= 1 && date <= 19)
// Taurus April 20 - May 20 (month == 3 && date >= 20 && date <=30) || (month === 4 && date >= 1 && date <= 20)
// Gemini May 21 - June 21 (month == 4 && date >= 21 && date <=31) || (month === 5 && date >= 1 && date <= 21)
// Cancer June 22 - July 22 (month == 5 && date >= 22 && date <=30) || (month === 6 && date >= 1 && date <= 22)
// Leo July 23 - Aug. 22 (month == 6 && date >= 22 && date <=31) || (month === 7 && date >= 1 && date <= 22)
// Virgo Aug. 23 - Sept. 22 (month == 7 && date >= 23 && date <=31) || (month === 8 && date >= 1 && date <= 22)
// Libra Sept. 23 - Oct. 23 (month == 8 && date >= 23 && date <=30) || (month === 9 && date >= 1 && date <= 23)
// Scorpio Oct. 24 - Nov. 21 (month == 9 && date >= 24 && date <=31) || (month === 10 && date >= 1 && date <= 21)
// Sagittarius Nov. 22 - Dec. 21 (month == 10 && date >= 22 && date <=30) || (month === 11 && date >= 1 && date <= 21)
// Capricorn Dec. 22 - Jan. 19 (month == 11 && date >= 22 && date <=31) || (month === 0 && date >= 1 && date <= 19)
// Aquarius Jan. 20 - Feb. 18 (month == 0 && date >= 20 && date <=30) || (month === 1 && date >= 1 && date <= 18)
// Pisces Feb. 19 - Mar. 20 (month == 1 && date >= 19 && date <=28) || (month === 2 && date >= 1 && date <= 20)

//............................................................

// if I wanna access both of them : object.entries()
// for (let [key, value] of Object.entries(starSign)) {
//     // now we have for of (instead of for in)
//     console.log(`${key} : ${value}`);
//   }

// for (let prop in signs) {
//     const whatIsYourStarSign = {

//         starSigns = () => {
//         if ((month == 2 && date >= 21 && date <=31) || (month === 3 && date >= 1 && date <= 19)){
//                 return Object.values(signs[0]); // aries
// }

//         starSign = () => {
//             if ((month == 3 && date >= 20 && date <=30) || (month === 4 && date >= 1 && date <= 20)){
//                 return Object.values(signs[1]); // taurus
// }

//         starSign = () => {
//             if ((month == 4 && date >= 21 && date <=31) || (month === 5 && date >= 1 && date <= 21)){
//                 return Object.values(signs[2]); // gemini
// }

//         starSign = () => {
//             if ((month == 5 && date >= 22 && date <=30) || (month === 6 && date >= 1 && date <= 22)){
//                 return Object.values(signs[3]); // cancer
// }

//         starSign = () => {
//             if ((month == 6 && date >= 22 && date <=31) || (month === 7 && date >= 1 && date <= 22)){
//                 return Object.values(signs[4]); // leo
// }

//         starSign = () => {
//             if ((month == 7 && date >= 23 && date <=31) || (month === 8 && date >= 1 && date <= 22)){
//                 return Object.values(signs[5]); // virgo
// }

//         starSign = () => {
//             if ((month == 8 && date >= 23 && date <=30) || (month === 9 && date >= 1 && date <= 23)){
//                 return Object.values(signs[6]); // libra
// }

//         starSign = () => {
//             if ((month == 9 && date >= 24 && date <=31) || (month === 10 && date >= 1 && date <= 21)){
//                 return Object.values(signs[7]); // scorpio
// }

//         starSign = () => {
//             if ((month == 10 && date >= 22 && date <=30) || (month === 11 && date >= 1 && date <= 21)){
//                 return Object.values(signs[8]); // sagittarius
// }

//         starSign = () => {
//             if ((month == 11 && date >= 22 && date <=31) || (month === 0 && date >= 1 && date <= 19)){
//                 return Object.values(signs[9]); // capricorn
// }

//         starSign = () => {
//             if ((month == 0 && date >= 20 && date <=30) || (month === 1 && date >= 1 && date <= 18)){
//                 return Object.values(signs[10]); // aquarius
// }

//         starSign = () => {
//             if ((month == 1 && date >= 19 && date <=28) || (month === 2 && date >= 1 && date <= 20)){
//                 return Object.values(signs[11]); // piscis
// }
