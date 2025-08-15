const userData = require("../userData");
const secretPAssword = "Naveed";
function alluserData(req, res) {
  const persons = userData.data;
  res.status(200).json(persons);
}

function searchUserByGender(req, res) {
  const query = req.query;
  const gender = query.gender;
  const finallist = userData.data.filter((person) => person.gender === gender);
  res.json(finallist);
}

function searchUserByName(req, res) {
  const param = req.params;
  const name = param.username;
  const result = userData.data.filter((user) => name === user.name);
  const payload = {
    data: result,
    count: result.length,
  };
  res.json(payload);
}

module.exports = { alluserData, searchUserByGender, searchUserByName };
