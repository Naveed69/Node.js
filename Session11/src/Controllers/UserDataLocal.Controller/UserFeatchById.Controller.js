const userData = require("../../../userData");

const getUsersById = (req, res) => {
  const id = req.params.id;
  const user = userData.data.filter((user) => user.id === id);
  res.send(user);
};

module.exports = { getUsersById };
