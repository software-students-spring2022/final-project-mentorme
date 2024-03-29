const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {

      const result = schema.validate(req.body);

      if (result.error) {

        return res.status(400).json(result.error);
      }
      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();

    }
  },

  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      school: Joi.string(),
      picture: Joi.string(),
      bio: Joi.string(),
      major: Joi.string(),
      over_all: Joi.number(),
      rates: Joi.array()
    })
  }
}