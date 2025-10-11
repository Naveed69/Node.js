const UserDataLocalService = require("../../Services/UserDataLocal.Services");
const getUsers = (req, res) => {
  try {
    const users = UserDataLocalService.fetchUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
};

module.exports = { getUsers };
