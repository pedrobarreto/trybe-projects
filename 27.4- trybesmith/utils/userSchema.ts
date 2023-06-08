import Joi from 'joi';

// https://www.codegrepper.com/code-examples/javascript/custom+joi+error+messages

export = Joi.object().keys({
  username: Joi.string().min(3).required()
    .messages({
      'string.min': 'Username must be longer than 2 characters',
    }),
  classe: Joi.string().min(3).required()
    .messages({
      'string.min': 'Classe must be longer than 2 characters',
    }),
  password: Joi.string().min(8).required()
    .messages({
      'string.min': 'Password must be longer than 7 characters',
    }),
  level: Joi.number().strict().greater(0).required(),
});
