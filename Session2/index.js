const express = require("express");
const HomeRoutes = require("./Routes/HomeRoutes");
const ApiRoutes = require("./Routes/ApiRoutes");
const app = express();

const port = 3000;

app.use(express.json());
const fitness = {
  name: "Naveed",
  age: 27,
  mob: 9008888569,
};

//home routes
app.use("/", HomeRoutes);

//Api Route

app.use("/api/v1/user", ApiRoutes);

//normal api calling

// app.get("/api/v1/user/userdata", alluserData);

//search by query
//in submission of form we don't use query

// app.get("/api/v1/user/search", searchUserByGender);

// search by params

/*search multple params
app.get("/api/v1/user/:username/:gender", (req, res) => { */

// app.get("/api/v1/user/:username", searchUserByName);

app.listen(port, () => {
  console.log("Server Started to listen at port no: ", port);
});
