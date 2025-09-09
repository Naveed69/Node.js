const isUserInputValid = require("../../Validator/newUserInput.vaidation");

const userInputValidator = (req, res, next) => {
  const body = req.body;
  const isvalid = isUserInputValid(body);
  const { error, value } = isvalid;
  if (error) {
    res.status(400).json({ message: "Please inter valid input", error });
  } else next();
};

module.exports = userInputValidator;
