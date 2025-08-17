const express = require("express");
const server = express();
const port = process.env.PORT || 3000;

//home calls
server.get("/", (req, res) => {
  res.send("Welcome to my site");
});

server.get("/contact", (req, res) => {
  res.send("Welcome to my site");
});

server.get("/", (req, res) => {
  res.send("Welcome to my site");
});

server.get("/", (req, res) => {
  res.send("Welcome to my site");
});

server.get("/", (req, res) => {
  res.send("Welcome to my site");
});

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});
