const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const encryptedPass = await bcrypt.hash(password, salt);
  return encryptedPass;
};

module.exports = { encryptPassword };
