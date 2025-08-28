const user = require("../Models/userModel");

class UserAddService {
  static async createUser(name, age, mobile, branch) {
    const userObj = user({ name, age, mobile, branch });
    try {
      const response = await userObj.save();
      return response;
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserAddService;
