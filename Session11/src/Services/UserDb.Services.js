const { userModel } = require("../Model/User.Model");
const { AuthenticationSevices } = require("./Auth.Services");
class UsersDbServices {
  static async addUser(user) {
    const { name, age, mobile, address, password } = user;
    const userData = userModel({
      name,
      age,
      mobile,
      address,
      password: await AuthenticationSevices.encryptPassword(password),
    });
    try {
      const response = await userData.save();
      return response;
    } catch (err) {
      if ((err.statusCode = 11000)) {
        const error = new Error(
          `user already present with this ${userData.mobile} mobile number`
        );
        error.statusCode = 404;
        throw error;
      }
      throw err;
    }
  }
}

module.exports = { UsersDbServices };
