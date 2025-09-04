const Joi = require("joi");

const newUserInputValidation = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  state: Joi.string().required(),
});

const isUserInputValid = (input) => {
  return newUserInputValidation.validate(input);
};

module.exports = isUserInputValid;
