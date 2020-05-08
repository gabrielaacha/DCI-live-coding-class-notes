// every element in my body is a node. i will get a node list every time i get a query selector
// nodes are not objects // not confuse node.js with nodes

let avatar = document.querySelector(".img");
console.log(avatar);
// i selected any class that is called img

let list = document.querySelectorAll(".img span");
console.log(list);
//

list.forEach((item) => {
  console.log(item);
  item.innerText = "nice";
  item.style.backgroundColor = "red";
});

console.log(list.length);
list[2].style.color = "blue";

let navList = document.querySelector("#menuList");
console.log(navList);

let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = "Nice one";

let moreClass = document.querySelector(".main");
moreClass.classList.add("small");
moreClass.classList.add("textRtl", "flexSize");
let classArr = ["classOne", "classTwo"];

// adding more classes to the div using:
moreClass, classList.add(...classArr);
console.log(moreClass.classList);
moreClass.style.color = "blue";
moreClass.style.backgroundColor = "grey";
moreClass.style.fontSize = "1.5rem";
moreClass.style.marginLeft = "5rem";
moreClass.style.display = "flex";
moreClass.style.justifyContents = "center";
// you can use any css style here

document.write("Hi, I am Gabriela");
document.write("<h1>cool this is me</h1>");

// i can inject anything using document.write // this can be a security issue later on
