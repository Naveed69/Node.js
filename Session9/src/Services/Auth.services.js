const bcrypt = require("bcrypt");
const { User } = require("../Model/User.model");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../Middleware/Authentication");

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
      let token = "";
      if (res) {
        token = jwt.sign(
          {
            username: userArray[0].username,
            nationality: "Indian",
          },
          JWT_KEY,
          { expiresIn: "20s" }
        );
      }
      return { isLogged: res, token };
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
