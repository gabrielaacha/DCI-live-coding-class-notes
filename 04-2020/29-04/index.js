function redBg() {
  this.style.backgroundColor = "red";
}

function whiteBg() {
  this.style.backgroundColor = "white";
}

function newUser() {
  result.innerHTML + -"Hi this is you </br>";
}

function windowLoad() {
  //   setInterval(newUser, 1000);
  //   alert("hi new person");
}

const stop = () => {
  header.removeEventListener("mouseover", redBg);
  header.removeEventListener("mouseleave", whiteBg);
};

function changeColor() {
  event.preventDefault();
  form.style.backgroundColor = "pink";
}

// const calculate = () => {
//   totSum.addEventListener("text", () => {
//     num1 + num2;
//   });
// };

console.log(calculate());

let header = document.querySelector("h1");
let result = document.querySelector(".result");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);

window.addEventListener("load", windowLoad); // browser related, not window related

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("thanks for your feedback");
});
form.addEventListener("reset", () => {
  alert("your input has been cleared out");
});

// let num1 = document.querySelector("#firstNumber").value;
// let num2 = document.querySelector("#secondNumber").value;
// let totSum = document.querySelector("#sumResult");
// totSum.addEventListener("text", () => {
//   alert("thanks for your feedback");
// });
