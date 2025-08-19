const express = require("express");
require("dotenv").config(); // this command will load everything/all the varilale in processs variable
//above process is globle variable
const HomeRoutes = require("./Routes/HomeRoutes");
const ApiRoutes = require("./Routes/ApiRoutes");
const { authorize } = require("./MiddleWare/Authorization");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

app.use(express.json());

//normal api in index.js not suggested
//authorize done here also

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.get("/fitness", authorize, (req, res) => {
  const fitness = {
    name: "Naveed",
    age: 27,
    diet: ["egg", "rice"],
  };
  res.json(fitness);
});

//home routes
app.use("/", HomeRoutes);

//Api Route

app.use("/api/v1/user", ApiRoutes);

//DataBase connection mongoose

const dataBaseUrl = process.env.db_URL + ":" + process.env.db_PORT;
mongoose.connect(dataBaseUrl).then(() => console.log("Connected database"));

//normal api calling

// app.get("/api/v1/user/userdata", alluserData);

//search by query
//in submission of form we don't use query

// app.get("/api/v1/user/search", searchUserByGender);

// search by params

/*search multple params
app.get("/api/v1/user/:username/:gender", (req, res) => { */

// app.get("/api/v1/user/:username", searchUserByName);

app.listen(port, () => {
  console.log("Server Started to listen at port no: ", port);
});
