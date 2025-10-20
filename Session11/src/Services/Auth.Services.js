const bcrypt = require("bcrypt");
const { userModel } = require("../Model/User.Model");
class AuthenticationSevices {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const encryptedPass = await bcrypt.hash(password, salt);
    return encryptedPass;
  }

  static async loginService(name, password) {
    const user = await userModel.findOne({ name });
    if (!user) {
      const err = new Error(`user with ${name} is not registred`);
      err.statusCode = 404;
      throw err;
    }
    const response = await bcrypt.compare(password, user.password);
    if (response) {
      return { isLoggedIn: response };
    }
    const error = new Error("Password is not correct");
    error.statusCode = 404;
    throw error;
  }
}

module.exports = { AuthenticationSevices };
