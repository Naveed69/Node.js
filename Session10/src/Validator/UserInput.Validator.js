const joi = require("joi");

const valid = joi.object().keys({
  name: joi.string().required(),
  username: joi.string().required().max(15),
  age: joi.number().max(100),
  email: joi.string().required(),
  password: joi.string().required(),
});

const isUserInputValidate = (input) => {
  const isValid = valid.validate(input);
  return isValid;
};

module.exports = { isUserInputValidate };
