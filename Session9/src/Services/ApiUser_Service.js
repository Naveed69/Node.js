const usersData = require("../../userData");
class ApiUserServices {
  static getAllUsers() {
    return usersData.data;
  }

  static userById(id) {
    return usersData.data.find((user) => user.id === Number(id));
  }

  static userByGender(gender) {
    return usersData.data.filter(
      (user) => user.gender.toLowerCase() === gender.toLowerCase()
    );
  }
}

module.exports = { ApiUserServices };
