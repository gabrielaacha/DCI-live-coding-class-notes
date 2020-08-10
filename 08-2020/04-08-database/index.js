// const express = require("express");
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync"); // library name
// const app = express(); // initialize the app
// const port = 3000;
// const jsonFile = new FileSync("db.json");
// const db = low(jsonFile);

// app.get("/new", (req, res) => {
//   db.defaults({ articles: [], user: {}, num: 1 }).write();
//   res.send("New db being init");
// });

// app.get("/add", (req, res) => {
//   // add?id=1&title=1+like+water --> how to write the url
//   console.log(req);
//   const id = req.query.id;
//   const title = req.query.title;
//   db.get("articles").push({ id: id, title: title }).write();
//   res.send(`New data being entered with id = ${id} and title = ${title}`);
// });

// app.listen(port, () => {
//   console.log(`server is listening on http://localhost:${port}`);
// });

// npm install lowdb

/////////////////////////////////////////////////////////////////////////////////////////////////
// npm i express
// npm i lowdb

// // express
// const express = require("express");
// const app = express();
// const port = 3000;
// // lowdb
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const jsonFile = new FileSync("db.json");
// const db = low(jsonFile);
// // db init
// app.get("/new", (req, res) => {
//   db.defaults({ articles: [], user: {}, num: 1 }).write();
//   res.send("New db being init");
// });
// // adding new
// app.get("/add", (req, res) => {
//   //  url      /add?id=1&title=1+like+water
//   const id = req.query.id;
//   const title = req.query.title;
//   db.get("articles").push({ id: id, title: title }).write();
//   res.send(`New data being entered with id = ${id} and title = ${title}`);
// });
// // look up
// app.get("/find", (req, res) => {
//   // url    /find?id=1
//   const idToFind = req.query.id;
//   res.send(db.get("articles").find({ id: idToFind }).value());
//   //   res.send(`New data being entered`);
// });

// // update
// app.get("/update", (req, res) => {
//   db.update("num", (n) => n + 1).write();
//   const num = db.get("num").value();
//   res.send(`num was increased by one, now num is = ${num}`);
// });

// // user name
// app.get("/user", (req, res) => {
//   // url   /user?name=Hadi
//   const name = req.query.name;
//   console.log(name);
//   db.set("user.name", name).write();
//   res.send(`Hey ${name} `);
// });

// // Post method     url https://website.com/login
// //  {
// //     'email': 'my@mail.co',
// //      'pass':'000callme000'
// //  }
// //
// app.post("/login", (req, res) => {
//   const userName = req.body.email;
//   const userPass = req.body.pass;
// });

// app.listen(port, () => {
//   console.log(`server listen on http://localhost:${port}`);
// });

///////////////////////////////////////////////////////////////////////////////////////
// npm i express
// npm i lowdb

// express
const express = require("express");
const app = express();

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// root req
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb");
});

// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// adding new
app.get("/add", async (req, res) => {
  //  url      /add?id=1&title=1+like+water
  const id = req.query.id;
  const title = req.query.title;
  await db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered with id = ${id} and title = ${title}`);
});
// look up
app.get("/find", async (req, res) => {
  // url    /find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
});

// update
app.get("/update", async (req, res) => {
  // url    /update
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was increased by one, now num is = ${num}`);
});

// user name
app.get("/user", async (req, res) => {
  // url   /user?name=Hadi
  const name = req.query.name;
  await db.set("user.name", name).write();
  res.send(`Hey ${name} `);
});

// Post method     url http://localhost:3000/login
//  {
//     "userName": "Hadi",
//      "pass":"000callme000"
//  }
//
app.post("/login", (req, res) => {
  console.log(req.body);
  const userName = req.body.userName;
  const userPass = req.body.pass;
  if (userName === "1" && userPass === "1") {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(401).send(`invalid username or pass`);
  }
});

// remove
app.get("/delete", async (req, res) => {
  // to remove article
  // url     /delete?title=something
  const title = req.query.title;
  await db.get("articles").remove({ title: title }).write();
  res.status(200).send(`your ${title} has been removed`);
});

// to remove property
// url /delete
db.unset("user.name").write;

app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", county: "DE" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
