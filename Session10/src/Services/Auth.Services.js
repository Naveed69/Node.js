const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userdbmodel } = require("../Models/User.model");
const { JWT_KEY } = require("../Middleware/Authentication");

class AuthServices {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const encryptedPass = await bcrypt.hash(password, salt);
    return encryptedPass;
  }

  static async loginservice(username, password) {
    const loginResponse = {
      isLoggedIn: false,
    };
    const user = await userdbmodel.findOne({ username });
    if (!user) {
      throw new Error("No registered user found");
    }
    const response = await bcrypt.compare(password, user.password);
    let token = "";
    if (response) {
      token = jwt.sign({ username, nationality: "Indian" }, JWT_KEY, {
        expiresIn: "20000ms",
      });
      return { isLoggedIn: true, token };
    } else {
      throw new Error("Please check the password and try once again");
    }
  }
}
module.exports = { AuthServices };
