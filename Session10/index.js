const express = require("express");
const userApiRouter = require("./src/Routes/UserApi.Routes");
const Authenticate = require("./src/Middleware/Authentication");
const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use("/api/v1/", Authenticate, userApiRouter);

app.listen(port, () => {
  console.log(`Server Started at port: ${port}`);
});
