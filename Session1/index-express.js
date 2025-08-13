const express = require("express");
const app = express();
const port = 3000;
app.get("/todos", (req, res) => {
  res.send("Welcome User...!!");
});

app.listen(port, () => {
  console.log("Server Started to listen at port no: ", port);
});
