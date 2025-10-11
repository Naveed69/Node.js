const express = require("express");
const UserRoutes = require("./src/Routers/Users.Router");
const app = express();
const cors = require("cors");
const UserDbRouter = require("./src/Routers/UsersDb.Router");
const LocaluserAuth = require("./src/Middleware/LocaluserAuth.Middleware/LocaluserAuth.Middleware");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", LocaluserAuth, UserRoutes);

app.use("/api/v1/", UserDbRouter);

mongoose
  .connect(process.env.MongoDb_URL)
  .then(() => console.log("Connect to Db"))
  .catch((err) => ("error while connection", err));

app.listen(port, () => {
  console.log("Server satrted at port: ", port);
});
