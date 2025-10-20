const Joi = require("joi");
const valid = Joi.object().keys({
  name: Joi.string().required().min(2),
  age: Joi.number().required(),
  mobile: Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/)
    .message({
      "string.pattern.base": "Mobile number should be 10 digit",
    }),
  address: Joi.string(),
  password: Joi.string(),
});

const validateUserDetails = (input) => {
  const isValid = valid.validate(input);
  return isValid;
};

module.exports = { validateUserDetails };
