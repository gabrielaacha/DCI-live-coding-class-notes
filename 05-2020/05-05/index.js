window.setTimeout(() => {}, 1000);

//promise declaration, checkPromise is the new object
let checkPromise = new Promise((resolve, reject) => {
  //always 2 functions, accepted and rejected
  let x = true;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry it's not cool");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })
  //then will take care of the resolve part and catch will take care of the reject part

  .catch((message) => {
    console.log(`I am catch and ${message}`);
  });
//--------------

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let ms = 3000;
delay(ms).then(myFunction);

function myFunction() {
  let text = document.querySelector(".text");
  text.innerHTML = `It took me ${ms} ms to be done`;
}
