const express = require("express");
const router = express.Router();

// root route

router.get("/", (req, res) => {
  res.send("Hey, this is HOME page");
});

router.get("/about", (req, res) => {
  res.send("Hey, this is ABOUT page");
});

module.export = router;
