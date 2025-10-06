const express = require("express");
const UserRoutes = require("./src/Routers/Users.Router");
const app = express();
require("dotenv").config();

app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", UserRoutes);

app.listen(port, () => {
  console.log("Server satrted at port: ", port);
});
