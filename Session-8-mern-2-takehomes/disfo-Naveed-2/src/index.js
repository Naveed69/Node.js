const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Routes/user.routes");
const discussionRouter = require("./Routes/discussion.routes");
const server = express();
require("dotenv").config();
const port = process.env.PORT || 8081;
server.use(express.json());
server.use("/", userRouter);
router.post("/discussions/", discussionRouter);

//MongoDB connection here
const mongoUrl =
  process.env.db_URL + ":" + process.env.db_PORT + "/session-6-TakeHome";
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

//Listing starated here
server.listen(port, () => {
  console.log("Server Listening at PORT ", port);
});
