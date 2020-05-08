//bubbling --> everything gets affected by the events

const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
  //  {alert("Hi");}
});

const hide = document.querySelector("#hide");
hide.addEventListener("change", function () {
  if (hide.checked) {
    list.getElementsByClassName.display = "none";
  } else {
    list.getElementsByClassName.display = "block";
  }
}); //referring to the checkbox, because it has two stager, checked and not checker

// const del = document.querySelector(".delete");
// del.addEventListener("click", function () {
//   event.stopPropagation();
//   console.log("nice");
// });
