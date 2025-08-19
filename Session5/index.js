const express = require("express");
const HomeRouter = require("./Routes/HomeRouter");
const ApiRouter = require("./Routes/ApiRouter");
const Authorization = require("./MiddleWare/Authorization");
const server = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

//home rout calls
server.use("/", HomeRouter);

// api rout calling and searching
server.use("/api/v1/user", Authorization, ApiRouter);

//without router we can use authorization

server.get("/fitness", Authorization, (req, res) => {
  const fitness = {
    name: "Naveed",
    age: 27,
    diet: ["Egg", "Ghee"],
  };
  res.status(200).json(fitness);
});

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});
