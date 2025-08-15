const express = require("express");
const {
  homeResponse,
  contactDetails,
} = require("./Controllers/HomeController");
const userData = require("./userData");
const {
  alluserData,
  searchUserByGender,
  searchUserByName,
} = require("./Controllers/APIControllers");
const app = express();

const port = 3000;

app.use(express.json());
const fitness = {
  name: "Naveed",
  age: 27,
  mob: 9008888569,
};
app.get("/todos", homeResponse);
app.get("/", homeResponse);
app.get("/contact", contactDetails);

//normal api calling

app.get("/api/v1/user/userdata", alluserData);

//search by query
//in submission of form we don't use query

app.get("/api/v1/user/search", searchUserByGender);

// search by params

/*search multple params
app.get("/api/v1/user/:username/:gender", (req, res) => { */

app.get("/api/v1/user/:username", searchUserByName);

app.get("/todos/contact", (req, res) => {
  res.send("9008888569 mail:naveed.desai@gmail.com");
});

app.listen(port, () => {
  console.log("Server Started to listen at port no: ", port);
});
