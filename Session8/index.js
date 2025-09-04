const express = require("express");
const app = express();
const Homerouter = require("./src/routes/HomeRoutes");
const ApiRouter = require("./src/routes/ApiRoute");
port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", Homerouter);
app.use("/api/v1", ApiRouter);

app.listen(port, () => {
  console.log("server started at port: ", port);
});
