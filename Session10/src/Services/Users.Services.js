const userData = require("../../userData");

const fetchAllUsers = () => {
  if (userData.data.length > 0) return userData.data;
  else throw new Error();
};

const fetchUserById = (id) => {
  const user = userData.data.find((user) => user.id == id);
  if (user.length > 0) return user;
  else throw new Error();
};

const fetchUserByGender = (gender) => {
  const user = userData.data.filter(
    (user) => user.gender == gender.toLowerCase()
  );
  if (user.length > 0) return user;
  else throw new Error();
};

module.exports = { fetchAllUsers, fetchUserById, fetchUserByGender };
