const usermodel = require("../Models/user.model");
class userService {
  static async createNewUser(fullName, username, email) {
    const userObj = usermodel({ fullName, username, email });
    try {
      const response = await userObj.save();
      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = userService;
