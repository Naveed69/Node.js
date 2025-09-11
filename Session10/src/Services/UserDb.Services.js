const { userdbmodel } = require("../Models/User.model");
const { AuthServices } = require("./Auth.Services");

class UserDBServices {
  static async addNewUser(body) {
    const { name, username, age, email, password } = body;
    const userDbObj = userdbmodel({
      name,
      username,
      age,
      email,
      password: await AuthServices.encryptPassword(password),
    });
    try {
      const response = await userDbObj.save();
      return response;
    } catch (err) {
      if (err.code === 11000) {
        const error = new Error(
          `User with this username: ${username} or email: ${email} already exists`
        );
        error.statusCode = 400;
        throw error;
      }

      throw err; // other errors
    }
  }

  static async getUser(username) {
    const response = await userdbmodel.find({ username });
    if (response.length > 0) return response;
    else throw new Error({ message: "No user found" });
  }

  static async deleteUser(username) {
    const response = await userdbmodel.findOneAndDelete({ username });
    if (response) return response;
    else throw new Error();
  }

  static async updateUser(body, username) {
    const { name, age, password } = body;
    const updateData = {};
    if (name) updateData.name = name;
    if (age) updateData.age = age;
    if (password) updateData.password = password;
    const response = await userdbmodel.findOneAndUpdate(
      { username },
      updateData,
      { new: true }
    );
    if (response) return response;
    else throw new Error();
  }
}

module.exports = { UserDBServices };
