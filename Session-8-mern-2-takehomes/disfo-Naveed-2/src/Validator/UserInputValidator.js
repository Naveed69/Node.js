const joi = require("joi");

const userinputSchema = joi.object().keys({
  fullName: joi.string().max(50).default(""),
  username: joi.string().max(25).required(),
  email: joi
    .string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({
      "string.pattern.base": "Please enter a valid email address",
      "any.required": "Email is required",
    }),
});

const isUserInputValid = (input) => {
  const isvalid = userinputSchema.validate(input);
  return isvalid;
};

module.exports = { isUserInputValid };
