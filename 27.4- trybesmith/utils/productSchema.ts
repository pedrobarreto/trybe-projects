import Joi from 'joi';

export = Joi.object().keys({
  name: Joi.string().min(3).required()
    .messages({
      'string.min': 'Name must be longer than 2 characters',
    }),
  amount: Joi.string().min(3).required()
    .messages({
      'string.min': 'Amount must be longer than 2 characters',
    }),
});
