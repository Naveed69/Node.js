const usersData = require("../../userData");
class ApiUserServices {
  static getAllUsers() {
    return usersData.data;
  }
}

module.exports = { ApiUserServices };
