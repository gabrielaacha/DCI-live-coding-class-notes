const color = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  console.log(result);
  return result;
};

const toDo = () => {
  let userInput = document.querySelector("#userText").value;
  if (userInput == "") {
    return alert("Write something please");
  }

  let newLi = document.createElement("li");
  let textNode = document.createTextNode(userInput);
  newLi.appendChild(textNode);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";

  let list = document.querySelectorAll("li:nth-child(odd)");
  list.forEach(({ style: item }) => {
    item.backgroundColor = color();
  });

  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  let listAll = document.querySelector("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
};
