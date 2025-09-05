const { User } = require("../Model/User.model");
const AuthService = require("../Services/Auth.services");

const register = async (req, res) => {
  const body = req.body;
  const { name, age, mobile, state, password } = body;
  const resgisterObj = User({
    name,
    age,
    mobile,
    state,
    password: await AuthService.encryptPassword(password),
  });
  try {
    const response = await resgisterObj.save();
    res.status(200).json({ message: "user added", response });
  } catch (err) {
    res.status(400).json(err);
  }
};
const login = async (req, res) => {
  const body = req.body;
  const { name, password } = body;
  const response = await AuthService.loginService(name, password);
  if (response.isLogged) {
    res.status(200).json({ message: "LoggedIn Succussfully" });
  } else {
    res.status(403).json({ message: "Try again with diffrent user name/Password" });
  }
};

module.exports = { register, login };
