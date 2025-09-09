const { discussionmodel } = require("../Models/discussions.model");
const usermodel = require("../Models/user.model");

class DiscussionService {
  static async AddNewDiscussion(body) {
    const username = body.author;
    const user = await usermodel.find({ username });
    const { title, author, content } = body;
    const discussionModel = discussionmodel({ title, author, content });
    if (user.length > 0) {
      const response = await discussionModel.save();
      return response;
    } else {
      throw new Error(`userName not found : ${username}`);
    }
  }

  static async AllDiscussion() {
    try {
      const response = discussionmodel.find();
      // console.log(response);
      return response;
    } catch (err) {
      throw new Error("No discussion found", err);
    }
  }

  static async byUserName(author) {
    const response = await discussionmodel.find({ author });
    if (response.length > 0) {
      return response;
    } else throw new Error({ message: "Didn't found username " });
  }

  static async byId(id) {
    console.log(id);
    const response = await usermodel.find({ id });
    console.log(response);
    return "null";
  }
}

module.exports = { DiscussionService };
