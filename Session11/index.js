const express = require("express");
const UserRoutes = require("./src/Routers/Users.Router");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors({origin: 'http://localhost:3000',}));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", UserRoutes);

app.listen(port, () => {
  console.log("Server satrted at port: ", port);
});
