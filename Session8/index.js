const express = require("express");
const app = express();
require("dotenv").config();
const Homerouter = require("./src/routes/HomeRoutes");
const ApiRouter = require("./src/routes/ApiRoute");
const Authenticate = require("./src/Middleware/Authentication");
port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", Homerouter);
app.use("/api/v1", Authenticate, ApiRouter);

app.listen(port, () => {
  console.log("server started at port: ", port);
});
