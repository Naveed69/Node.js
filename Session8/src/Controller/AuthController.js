const { User } = require("../Model/User.model");

const register = async (req, res) => {
  const body = req.body;
  const { name, age, mobile, state, password } = body;
  const resgisterObj = User({ name, age, mobile, state, password });
  try {
    const response = await resgisterObj.save();
    res.status(200).json({ message: "user added", response });
  } catch (err) {
    res.status(400).json(err);
  }
};
const login = (req, res) => {};

module.exports = { register, login };
