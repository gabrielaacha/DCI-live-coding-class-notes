let str = "this is long text";
console.log(str.slice(3));
let str1 = "Hi";
let str2  = "Hadi"
console.log(`${str}
${str2}`)

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str.includes("java"));
let x = true;
true ? console.log("cool"):console.log("nope");

//const

//local global
var global = 'Hi I\'m global'
console.log(global)
function sum() {
let local = 'Hi I am local'
console.log(global)
console.log(local)
 }

 sum()
 // console.log(local); // not there

 // Conditional assignment with the ternary operator
 let kid = 2;
 console.log(kid>16 ? "Party":"Home Party");
 console.log(x ? "Hey that's nice" : "Oh noooooooo"); // we would´t know how java script would react to this, better not use this

 //brackets notation [0]

 // `'\`, `\"`, `\n` for a new line
 console.log("Hi I am \n Hadi");

 // .trim() deletes spaces beginning and end
 let str4 = "Hadi";
 console.log(str4.trim());
 function print (str){
     console.log(str);
 }
 print ("Hadi");

 // Numbers
 let z =1;
 let w = 1;
 console.log(z + w);
 console.log(z - w);
 console.log(z * w);
 console.log(z / w);
 console.log(z % w); // this will give you the remainder

 // Integers vs. Floats
let int1= 11;
let int2= 1.5;
console.log(int1 + "" + int2);

 // isNaN // is not a number
 console.log(isNaN(int1) ? "yeah it is a string" : "Nope sorry");

// Converting Strings into Numbers
let strInt = '2';
let strInt2 = '2';
let result = strInt + strInt2;
let newNum = parseInt(strInt, 16); // converts the string into a number together with the other lines, and it will select the number system, decimal, etc...
console.log(newNum);


//1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

// my answer
let str8 = "my grandpa is";
let str9  = " 88"
console.log(`${str8} ${str9}`)

// Hadis answer
let var1 = "This is a string";
let var2 = 22;
let longStr2 = var1 + var2;
console.log(longStr2);

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let newString = "trying";
let firstletter = newString[0];
let lastletter = newString[newString.length - 1];
let shortStr3 = newString.substring(1, newString.length - 1);
console.log(shortStr3);
console.log(lastletter + shortStr3 + firstletter);

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// my answer
 // let grandpa = 88;
 // console.log(grandpa>18 ? "and he can drive":"and he can't drive");
 // console.log(str9 %);

// isEven ? (console.log(str9 % 2));

// Hadis answer 1
let numX = 30%2
console.log (numX == 0 ? "is even" : "is odd");

// Hadis answer 2
let num101 = 30
let numY = num101 % 2;
console.log(numY);
console.log(numY == 0 ? `${num101} is even` : `${num101} is odd`);

let integer = "1005"
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.5";
let reallFloat = parseFloat(float);
console.log(reallFloat);
 
//what if you write parseInt instead of parseFloat
let float1 = "10.5";
let reallFloat1 = parseInt(float1);
console.log(reallFloat1);

//Modulo %
let lastNum = 4 % 2;
console.log(lastNum);

//*+-/++--
let q = 3;
let s = 4;
let sum1 = q + s;
let div1 = q / s;
let mul1 = q * s;
console.log(sum1, div1, mul1);

// Exponentiation ** the power of (new added) 
let power = 2 ** 2 ;
console.log(power);

//Math.floor()
let float3 = 1.3;
let realIni = Math.floor(float3);
console.log(realIni);

//Math.ceil()
let realIni2 = Math.ceil(float3);
console.log(realIni2);

// Math.max()
console.log(Math.max(800, 1, 3339.5,4, 66, 700));
console.log(Math.max(x, z, q, s));

// Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));

// exercise A: Create a variable with the value of “123”. Convert it to a number.
let varX = "123";
let newNum4 = parseInt(varX, 10);

//Hadis solution:
console.log(parse(StrInt1));

// exercise B: Create a variable with the value of “130.7". Convert it to a number.

let varZ = "130.7";
let newNum5 = parseFloat(varZ, 10);
//Hadis solution
console.log(parseFloat(strFloat1));

// exercise C: Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let varK = "isDog"
let isDog = true
true ? console.log("pat, pat") : console.log("find me a dog to pat!")

// Hadis
console.log(isDog ? "pat, pat" : "find me a dog to pat");

// exercise D: Declare a variable named speedCheck. If speed limit is 50km/h, and your speed is above that, print ‘you’re going too fast!’. If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let varXx = "speedCheck";
let speedCheck = 60;
console.log(speedCheck>50 ? "you’re going too fast!":"You’re driving below the speed limit, Oma");

// Hadis 1
let speedCheck1 = 60;
let SpeedLimit1 = 50;
console.log(speedLimit1<speedCheck1 ? "you’re going too fast!":"You’re driving below the speed limit, Oma")

// Hadis 2
let speedCheck2 = 50;
let speedLimit2 = 50;
let textStrTrue2 = "you’re going too fast!"
let textStrFalse2 = "You’re driving below the speed limit, Oma"
console.log(speedLimit2 <= speedCheck2 ? textStrTrue2 : textStrFalse2);

// exercise E: Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
let varXxx     = "age";
let age = 14;
//console.log(varXxx>16 ? "serve butter beer":"serve beer");
age > 16 ? console.log ("serve butter beer"): console.log("serve beer");

// Hadis 1
let age1 = 14;
console.log(age1<16 ? "serve butter beer" : "serve beer")

// exercise F: Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let varVar1 = "isStudent";
let isStudent = false;
true ? console.log("Ticket costs €5,00") : console.log("Ticket costs €12,00");

// Hadis 1
let isStudent = false;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00")

// exercise G: Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
let varVar = "okMarie"
let okMarie = "cake"
cake ?

// Hadis 1
let okMarie = "Apple";
print(okMarie === "cake" ? "Let them eat cake" : "Oh, bother")

