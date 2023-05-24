const Joi = require('joi');

module.exports = Joi.object().keys({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().length(6).required(),
  });
