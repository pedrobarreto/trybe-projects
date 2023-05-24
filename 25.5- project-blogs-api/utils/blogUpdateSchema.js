const Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().required()
    .error(new Error('"title" is required')),
    content: Joi.string().required()
    .error(new Error('"content" is required')),
  });
