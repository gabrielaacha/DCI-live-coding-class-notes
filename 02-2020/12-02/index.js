//........................getter and setter................................................................................
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
console.log(
  "-----------------------getter--and--setter----------------------------"
);
fun(22, { name: "Ali" });
const userData = {
  firstName: "Hadi",
  lastName: "nsreeny",

  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },

  set fullName(str) {
    let arr = str.split("");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};
// getter:
userData.fullName;
// userData.firstName = "Ali";
// userData.lastName = "xxx";

// setter // when you have the setter you don't need the parenthesis

userData.fullName = "Ali xxx";

//..................constructor.....................................................................................................
// build template for my object and it will send all the data as a ready object
// constructor only builds objects
console.log("-----------------------constructor----------------------------");
function Person(name, age, activities) {
  // Pascal case, starting with capital letter
  this.name = name; // this will refer to an empty object, because there is no object yet.
  this.age = age;
  this.activities = activities;
}

let ali = new Person("Ali", 22, ["party", "dance"]); // creates something new thing, because of the setup above it will be an object
console.log(ali); // expected output: Person { name: 'Ali', age: 22, activities: [ 'party', 'dance' ] }
const obj = new Date(); // expected outcome: 2020-02-12T08:55:45.665Z
console.log(obj);

//===============================Exercises===========================================================================================

// create a constructor to print name, age, etc, but  with a method
console.log(
  "-------------------exercise adding a method-------------------------------"
);
let hobbies = "";

function Human(name, age, activities) {
  this.name = name;
  this.age = age;
  this.activities = activities;
  this.printOut = function() {
    console.log(`Hey${this.name}, you are too early, and also ${this.age}`);
  };
}
let alien = new Human("Babs", 57, hobbies);
let olga = new Human("Olga", 40, ["sleeping", "dance"]);
console.log(alien); // expected output:  Human { name: 'Babs', age: 57, activities: [Function (anonymous)] }

//....................reference............................................................................................................
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
//.........................................................................................................................................

//=======================================================================================================================================

//.......................classes..........................................................................................................
// used to create a template object situation
// saves time writing same data over and over
// we use class to create one or more objects, you can't use it instance in you application but it will be like a  for a newer objects if you will.
// the class will have instances properly and can have instances method, ideally we use the properties in the method to achieve a task.
// the class will have also a constructor, this bad boy will run only ones when the object being created, we use constructor function to setup the object
// class declaration creates a new class with a name that you give, you would  use prototype-based inheritance.
// instance is when the functions automatically creates an object out of the data
console.log(
  "-----------------------classes------------------------------------------"
);
class Animals {
  // setting up my constructor
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown; // a parameter will have the underscore dash
  } // the method will be built outside of the constructor
  display() {
    console.log(
      `it is very cute ${this.kind}, and lives in her ${this.hometown}`
    ); // this is called instance method
  }
}

let casper = new Animals("Dog", "L.A.");
casper.display();
let sofie = new Animals("Fish", "Berlin");
sofie.kind = "cat"; // this is if you wanna send the date later on and not on the go
let vermut = new Animals("Cat", "Barcelona");
console.log(casper.kind); // Dog
console.log(casper.hometown); // L.A.
console.log(casper.display); // [Function: display]
console.log(sofie); // expected outcome: Animals { kind: 'Fish', hometown: 'Berlin' }

//............................classes..different..version.......................................
console.log(
  "-------------------classes--calling--class--at--the--end-------------------------------------"
);
class Color {
  // i am creating properties now // this is not an object, it is a template for the object
  constructor() {
    // setting default values for the object
    this.name = "";
    this.age = 0;
    this.birthDay = 0;
  }
}

const red = new Color(); // this is empty
red.age = 123434;
red.name = "Red";
console.log(red); // expected outcome : Color { name: 'Red', age: 123434, birthDay: 0 }

//===========================Exercise==================================================================
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// The Person class should have a method called describe which returns a string with the following syntax:
// “name, age years old”. So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”.

console.log(
  "-----------------------------exercise--classes--1-----------------------------------------"
);

class Person2 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    return `${this.name} is ${this.age} years old`;
  }
}

let peps = new Person2("Peps", 25);
console.log(peps.describe());

//---------------------------------------------------------------------------------------------------------------------------

// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.

console.log(
  "-----------------------------exercise--classes--2-----------------------------------------"
);
class Tv {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel; // could be here 1
    this.volume = _volume; // // could be here 50
  }

  x() {
    // tv has only 50 channels
    // let max = 1;
    // let min = 50;
    this.channel = Math.floor(Math.random() * (max - min) * 51);
  }

  //   hello() {
  //     // console.log(
  //     //   `${this.brand} at channel ${this.channel}, volume is at ${this.volume}`
  //     // );
  //   }

  //   get x() {
  //     return this.volume();
  //   }
  //   volume() {
  //     let vol = 0;
  //     return Math.max(100) && Math.min(0); // volume between 0 and 100
  //   }
}

let tvSetting = new Tv("Sony");
console.log(tvSetting);
//console.log(tvSettings.x);

//console.log(tvSetting.volume());

//-----------------------------Hadis--solution----------------------------------------------
console.log(
  "---------------------------------Hadis--solution---------------------------------------"
);
class Tv2 {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(`volume is ${this.volume}`);
    } else {
      console.log(`this is too much`);
    }
  }
  decVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log(`volume is ${this.volume}`);
    } else {
      console.log(`this is too little`);
    }
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }
  ranChannel() {
    this.channel = Math.floor(Math.random() * 51); // 51 so it includes 50
    console.log(`channel ${this.channel}`);
  }

  display() {
    return `this TV is ${this.brand} has a ${this.channel} hello ${this.volume}`;
  }
}

let samsung = new Tv2("Samsung", 20, 300);
samsung.decVolume();
samsung.ranChannel();
let apple = new Tv2("Apple", 100, 30);
console.log(apple.display());

//=========================================================================================

//.............New class..........................................................................
console.log(
  "---------------------------------new--class---------------------------------------------"
);
class Person3 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    // this is parent class (Person3)
    console.log(`hey, my name is ${this.name} and my height is ${this.height}`);
  }
}
// I am creating a new class extending the previous one
class Kid extends Person3 {
  constructor(_name, _age, _height) {
    super(_name, _age); // this is giving access to the original properties, the Person3 ones.
    this.height = _height;
  }

  show() {
    // create a method // this is
    return `${this.name} is a ${this.age} years old and my height is ${this.height}`;
  }
}

let zain = new Kid("Zain", 10, 180);
zain.display();
zain.show();
const nancy = new Kid("Nancy", 40);
console.log(nancy.show);
console.log(typeof nancy);
zain.increment = function() {
  console.log("Cool");
};

//...................................................................................................................

//================================RECAP==ARRAYS========================================================================

//....................Array.filter()...................................................................................
let names = ["Ali", "Nancy", "Olga", "Martin", "Wolfgang", "Karl"];
let result;
result = names.filter(name => name.length == 4);
console.log(result);

//....................Array.find().....................................................................................
result = names.find(name => name.length == 4); //
console.log(result);

//....................map() // gives every individual index alone......................................................
let numbers = [2, 4, 6, 7, 8, 9];
names.map(x => console.log(x));
let letters = ["a", "e", "f", "b", "c", "h"];

//.........................array.reduce().............................................................................
result = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(result);

//..........................array.sort()..............................................................................
letters.sort(); // this changes the original array and puts the numbers in order // UTF8 logic, not alphabetically
console.log(letters);
names.sort();
console.log(names);

//======================================================================================================================
//...................................................................................................................
// you can extend javascript classes:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
//...................................................................................................................
