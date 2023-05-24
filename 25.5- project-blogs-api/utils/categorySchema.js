const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required()
    // https://stackoverflow.com/questions/52846521/how-to-have-custom-message-in-joi-validation
    .error(new Error('"name" is required')),
  });
