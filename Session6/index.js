const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello node started");
});
app.get("/contact", (req, res) => {
  res.send("mob: 9008888569");
});
app.get("/fitness", (req, res) => {
  res.send("Hello node started");
});
app.get("/services", (req, res) => {
  res.send("Hello node started");
});

app.listen(port, () => {
  console.log("Server started to listen at:", port);
});
