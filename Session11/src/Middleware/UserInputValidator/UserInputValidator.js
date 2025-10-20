const { validateUserDetails } = require("../../Validator/UserInputValidator");

const UserDetailsInputValidate = (req, res, next) => {
  const userDetails = req.body;
  const { value, error } = validateUserDetails(userDetails);
  if (error) {
    res.status(400).json({ message: "Please enter correct details" });
  } else next();
};

module.exports = { UserDetailsInputValidate };
