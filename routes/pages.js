const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/html/home.html'));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/html/contact.html");
});

app.get("/services", function (req, res) {
  res.sendFile(__dirname + "/public/html/services.html");
});

app.get("/profile", function (req, res) {
  res.sendFile(__dirname + "/public/html/profile.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/html/about.html");
});


module.exports = router;
