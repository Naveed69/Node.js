const userData = require("../../userData");
class UserDataLocalService {
  static fetchUsers() {
    const users = userData.data || [];
    if (users.length > 0) {
      return users;
    } else {
      const error = new Error("No users found in local storage");
      error.statusCode = 404;
      throw error;
    }
  }

  static fetchUserById(id) {
    const user = userData.data.find((user) => user.id === Number(id));
    if (user) return user;
    else {
      const error = new Error(`no user found with give id:${id}`);
      error.statusCode = 404;
      throw error;
    }
  }
}

module.exports = UserDataLocalService;
