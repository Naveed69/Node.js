const express = require("express");
const userApiRouter = require("./src/Routes/UserApi.Routes");
const Authenticate = require("./src/Middleware/Authentication");
const userDbRouter = require("./src/Routes/UserDB.Routes");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use("/api/v1/", Authenticate, userApiRouter);

app.use("/api/user", Authenticate, userDbRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to DB"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server Started at port: ${port}`);
});
