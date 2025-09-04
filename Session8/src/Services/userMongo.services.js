const { User } = require("../Model/User.model");

class userMongoServices {
  static async addUser(name, age, mobile, state) {
    const userObj = User({ name, age, mobile, state });
    try {
      const response = await userObj.save();
      return response;
    } catch (err) {
      throw { message: "Enable to add user", err };
    }
  }
}

module.exports = { userMongoServices };
