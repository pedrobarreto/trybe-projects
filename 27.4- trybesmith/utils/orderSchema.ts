import Joi from 'joi';

export = Joi.object().keys({
  products: Joi.array().min(1).required()
    .messages({
      'array.min': 'Products can\'t be empty',
      'array.base': 'Products must be an array of numbers',
    }),
  
});
