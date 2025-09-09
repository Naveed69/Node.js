const bcrypt = require("bcrypt");
const { User } = require("../Model/User.model");

class AuthService {
  static async loginService(name, password) {
    const loginResponse = {
      isLogged: false,
    };
    const userArray = await this.findUser(name);

    if (!userArray || !userArray.length) {
      return loginResponse;
    } else {
      const res = await bcrypt.compare(password, userArray[0].password);
      return { isLogged: res };
    }
  }

  static async encryptPassword(plainPassword) {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(plainPassword, salt);
    return encryptedPassword;
  }

  static async findUser(name) {
    const user = await User.find({ name });

    return user;
  }
}

module.exports = AuthService;
