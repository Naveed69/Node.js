const express = require("express");
const HomeRouter = require("./Routes/HomeRouter");
const ApiRouter = require("./Routes/ApiRouter");
const Authorization = require("./MiddleWare/Authorization");
const blogRouter = require("./Routes/BlogRouter");
const server = express();
require("dotenv").config();
server.use(express.json());
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
//home rout calls
server.use("/", HomeRouter);

// api rout calling and searching
server.use("/api/v1/user", Authorization, ApiRouter);

//database queries in api mode

server.use("/api/v1/blogs", blogRouter);
//without router we can use authorization

server.get("/fitness", Authorization, (req, res) => {
  const fitness = {
    name: "Naveed",
    age: 27,
    diet: ["Egg", "Ghee"],
  };
  res.status(200).json(fitness);
});

//DataBase connection mongoose
// dataBaseUrl = mongodb://localhost:27017

const dataBaseUrl = process.env.db_URL + ":" + process.env.db_PORT + "/Node";
mongoose.connect(dataBaseUrl);

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});
