const { isUserInputValid } = require("../../Validator/UserInputValidator");

const userinputValidator = (req, res, next) => {
  const body = req.body;
  const isvalidResult = isUserInputValid(body);
  const { error } = isvalidResult;
  if (error) {
    res.status(404).json({ error: error });
  } else next();
};

module.exports = { userinputValidator };
