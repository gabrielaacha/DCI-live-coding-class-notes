const express = require("express"); // we are requesting the library

const app = express(); // name the app

const port = 3000; // declare the port

app.get("/", (req, res) => {
  res.send("hey I am home page");
});

app.get("/about", (req, res) => {
  res.send("I am about");
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
}); // server is listening to anything in that port , any incoming request, there will be a response sent back

// command lines
// npm init -y
// npm i express --save
// nodemon index.js // to check if there are errors
// npm i -g express-generator // will give access to a program called express which will give skeletons
// express --ejs project-gen
// cd project --> go to the project
// npm install
// npm start
