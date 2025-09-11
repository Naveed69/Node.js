const { AuthServices } = require("../Services/Auth.Services");

const Login = async (req, res) => {
  const body = req.body;
  const { username, password } = body;
  try {
    const response = await AuthServices.loginservice(username, password);
    res.send(response);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = Login;
