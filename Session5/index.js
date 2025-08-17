const express = require("express");
const { ApiCall } = require("./Controllers/Api_Controller");
const server = express();
const port = process.env.PORT || 3000;

//home calls
server.get("/", (req, res) => {
  res.send("Welcome to my site");
});

server.get("/contact", (req, res) => {
  res.send("Mob:9008888569 mail:naveed@gmail.com");
});

// api calling and searching
server.get("/api/v1/user", ApiCall);

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});
