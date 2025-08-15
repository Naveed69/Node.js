const userData = require("../userData");
const secretPAssword = "Naveed";
function alluserData(req, res) {
  const persons = userData.data;
  res.status(200).json(persons);
}

function searchUserByGender(req, res) {
  const header = req.headers;
  const auth = header.authorization;
  if (auth === secretPAssword) {
    const query = req.query;
    const gender = query.gender;
    const finallist = userData.data.filter(
      (person) => person.gender === gender
    );
    res.json(finallist);
  } else {
    res.status(429).send({ message: "Please enter correct password" });
  }
}

function searchUserByName(req, res) {
  const header = req.headers;
  const auth = header.authorization;
  if (auth === secretPAssword) {
    const param = req.params;
    const name = param.username;
    const result = userData.data.filter((user) => name === user.name);
    const payload = {
      data: result,
      count: result.length,
    };
    res.json(payload);
  } else {
    res.status(429).send({ message: "Please enter correct password" });
  }
}

module.exports = { alluserData, searchUserByGender, searchUserByName };
