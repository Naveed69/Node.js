const userData = require("../userData");
function ApiCall(req, res) {
  res.send("Welcome to my site api from controll");
}

function ApiCallAllUsers(req, res) {
  res.json(userData.data);
}

function ApiSearchUser(req, res) {
  const param = req.params.name;
  console.log(param);
  const users = userData.data;
  const user = users.filter((user) => user.name === param);
  res.status(202).send(user);
}

function ApiGenderSearch(req, res) {
  const searchQuery = req.query.gender;
  const users = userData.data.filter((user) => user.gender === searchQuery);
  const results = {
    count: users.length,
    users,
  };
  res.status(201).send(results);
}

module.exports = { ApiCall, ApiCallAllUsers, ApiSearchUser, ApiGenderSearch };
