const userData = require("../../../userData");

const getUsersById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = userData.data.find((user) => user.id === Number(id));
  if (user) {
    res.send(user); // Send the user if found
  } else {
    res.status(404).send({ message: "User not found" }); // Return a 404 if no user is found
  }
};

module.exports = { getUsersById };
