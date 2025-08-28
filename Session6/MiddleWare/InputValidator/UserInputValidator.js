const { isUserInputValid } = require("../../Validator/UserInputValidator");

const userInputValidator = (req, res, next) => {
  const body = req.body;
  const validationResult = isUserInputValid(body);
  const { error, value } = validationResult;

  if (error) {
    res.status(400).json({ message: "please enter correct values", error });
  } else next();
};

module.exports = userInputValidator;
