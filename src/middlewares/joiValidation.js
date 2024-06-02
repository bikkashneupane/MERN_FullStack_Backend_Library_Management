import Joi from "joi";

const STRING = Joi.string();
const STRING_REQUIRED = Joi.string().required();
const STRING_ALLOWED = Joi.string().allow("", null);

const NUMBER = Joi.number();
const NUMBER_REQUIRED = Joi.number().required();

const EMAIL = Joi.string().email({
  minDomainSegments: 2,
});

export const JoiValidate = (schema, req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    error
      ? res.json({
          status: "error",
          message: error.message,
        })
      : next();
  } catch (error) {
    next(error);
  }
};

export const newUserValidate = (req, res, next) => {
  const schema = Joi.object({
    firstName: STRING_REQUIRED,
    lastName: STRING_REQUIRED,
    email: EMAIL,
    phone: NUMBER_REQUIRED,
    password: STRING_REQUIRED,
  });

  return JoiValidate(schema, req, res, next);
};

export const loginUserValidate = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    password: STRING_REQUIRED,
  });

  return JoiValidate(schema, req, res, next);
};

export const newBookValidate = (req, res, next) => {
  const schema = Joi.object({
    title: STRING_REQUIRED,
    author: STRING_REQUIRED,
    isbn: NUMBER_REQUIRED,
    description: STRING_REQUIRED,
    publishedYear: NUMBER_REQUIRED,
    thumbnail: STRING_ALLOWED,
  });

  return JoiValidate(schema, req, res, next);
};
