const express = require("express");
const app = express();
require("dotenv").config();
const Homerouter = require("./src/routes/HomeRoutes");
const ApiRouter = require("./src/routes/ApiRoute");
const MongoDbRouter = require("./src/routes/MongoDbRoutes");
const Authenticate = require("./src/Middleware/Authentication");
const { default: mongoose } = require("mongoose");
port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", Homerouter);
app.use("/api/v1", Authenticate, ApiRouter);
app.use("/databse/", MongoDbRouter);

//MongoDb Connection
mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => console.log("Connected DB"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log("server started at port: ", port);
});
