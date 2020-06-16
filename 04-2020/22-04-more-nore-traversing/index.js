//way to inject things into the html
document.write("Hey, this is me");
document.write("<h3> Hello </h3>");
const create = () => {
  let newElement = document.createElement("div");
  // this is the way to create a new element
  // lets add a small text
  let newText = document.createTextNode("I am a new element");
  console.log(newElement);
  //every time the user clicks on the "create new" there will be a new div created
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput); // turning user input into text
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi); // injecting new list item into the ordered list
  document.querySelector("#userText").value = "";
};
