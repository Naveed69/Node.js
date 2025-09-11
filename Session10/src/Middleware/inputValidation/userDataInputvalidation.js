const { isUserInputValidate } = require("../../Validator/UserInput.Validator");

const userDataInputValidate = (req, res, next) => {
  const input = req.body;
  const response = isUserInputValidate(input);
  const { error, value } = response;
  if (error)
    res
      .status(500)
      .json({ message: "Please check the details before submitting", error });
  else next();
};

module.exports = { userDataInputValidate };
