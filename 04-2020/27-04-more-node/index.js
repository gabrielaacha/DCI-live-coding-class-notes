//travesŕsing
//node vs. element nodes

let ele = document.querySelector("#second").previousElementSibling;
console.log(ele); // anything in the page, not necessarily from the ame category

let ele2 = document.querySelector("body").previousSibling;
console.log(ele2);

let mainText = document.getElementById("text").firstElementChild;
console.log(mainText.nodeName);

//innerHTML gives you everything inside the scope
//textContent
//nodeName
//nodeType
//id

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText

let text = document.querySelector("span");
let closestElement = text.closest("#text");
console.log(closestElement);

let names = document.querySelectorAll("li");
names.forEach((name) => {
  if (name.matches(".teacher")) {
    console.log(`${(name, textContent)} is the teacher for FbW26`);
  }
});

//how to grab all children

let allChildren = document.querySelector("body").children;
console.log(allChildren);

//select specific children

let heading = document.querySelector("hi");
heading.getElementsByClassName.backGroundColor = "red";

// let menu list

let menuList = document.getElementsById("menu").lastElementChild;
console.log(menuList);


let allComments = function (element) {
    let arr = [] ;
    for (let i = 0; i < element.childNotes)
}