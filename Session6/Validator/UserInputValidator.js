const joi = require("joi");
//input validation
const userInputSchema = joi.object().keys({
  name: joi.string().required().min(5),
  age: joi.number().required(),
  mobile: joi.number().required(),
  branch: joi.string().required(),
});

const isUserInputValid = (input) => {
  const isValid = userInputSchema.validate(input);
  return isValid;
};

module.exports = { isUserInputValid };
