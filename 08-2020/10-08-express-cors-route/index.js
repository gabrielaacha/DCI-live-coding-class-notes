const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const PORT = process.env.PORT || 3000;

// app.use(cors());

app.use(router);

// every request has to pass through the middleware called cors here

// app.get("/", (req, res) => {
//   res.send("Hey I am a root page");
// });

// app.get("/products", (req, res) => {
//   res.send("Hey I am the production page");
// });

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`);
});

//npm i cors // install cors
