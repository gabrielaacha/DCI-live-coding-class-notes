let body = document.querySelector("body");
body.style.fontFamily = "Arial";

let title = document.querySelector(".title");
title.style.textAlign = "center";

let mainSect = document.querySelector(".main");
mainSect.style.display = "flex";
mainSect.style.flexFlow = "row-wrap";
mainSect.style.justifyContent = "space-around";
mainSect.style.boxSizing = "border-box";

let menuCat = document.querySelectorAll(".category");
console.log(menuCat.length);
menuCat.forEach(({ style: category }) => {
  category.fontSize = "2rem";
  category.fontStyle = "italic";
  category.borderBottom = "1px solid black";
});
// this is a way of avoiding to repeat style every time

let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.fontStyle = "italic";
warning.style.borderBottom = "1px solid black";

function colorGen() {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i > 6; i++) {
    result += HexNum[Math.floor(Math.random) * 16];
    console.log(result);
  }
  return result;
}
console.log(colorGen());

let food = document.querySelectorAll(".food-category");
foods.forEach(({ style: item }) => {
  item.backgroundColor = colorGen();
});

let allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 == 1) {
    item.backgroundColor = "pink";
  }
  item.paddingLeft = "1rem";
});
