const express = require("express");
const { default: mongoose } = require("mongoose");
const HomeRouter = require("./Routes/HomeRoute");
const UserApiRouter = require("./Routes/UserApiRouter");
require("dotenv").config();
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
//Home router
app.use("/", HomeRouter);

//User Api Router
app.use("/api/v1/", UserApiRouter);

//mongoDB connection with mongoose
mongoose
  .connect(process.env.db_URL + ":" + process.env.db_PORT + "/Session6")
  .then(console.log("Mongodb connected"));

app.listen(port, () => {
  console.log("Server started to listen at:", port);
});
