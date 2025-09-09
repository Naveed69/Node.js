const { User } = require("../Model/User.model");

class userMongoServices {
  static async addUser(name, age, mobile, state, password) {
    const userObj = User({ name, age, mobile, state, password });
    try {
      const response = await userObj.save();
      return response;
    } catch (err) {
      throw { message: "Enable to add user", err };
    }
  }
}

module.exports = { userMongoServices };
