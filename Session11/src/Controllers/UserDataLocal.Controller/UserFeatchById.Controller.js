const UserDataLocalService = require("../../Services/UserDataLocal.Services");
const getUsersById = (req, res) => {
  const id = req.params.id;
  try {
    const user = UserDataLocalService.fetchUserById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
};

module.exports = { getUsersById };
