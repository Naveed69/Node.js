const { userMongoServices } = require("../Services/userMongo.services");

const addUser = async (req, res) => {
  const { name, age, mobile, state } = req.body;
  try {
    const response = await userMongoServices.addUser(name, age, mobile, state);
    res.status(200).json({ message: "user added", response });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addUser };
