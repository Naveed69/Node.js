const express = require("express");
const { homeResponse } = require("./Controllers/HomeController");
const userData = require("./userData");
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

//normal api calling

app.get("/api/v1/user/userdata", (req, res) => {
  const persons = userData.data;
  res.status(200).json(persons);
});

//query search
app.get("/api/v1/user/search", (req, res) => {
  const query = req.query;
  const gender = query.gender;
  const finallist = userData.data.filter((person) => person.gender === gender);
  res.json(finallist);
});

app.get("/todos/contact", (req, res) => {
  res.send("9008888569 mail:naveed.desai@gmail.com");
});

app.listen(port, () => {
  console.log("Server Started to listen at port no: ", port);
});
