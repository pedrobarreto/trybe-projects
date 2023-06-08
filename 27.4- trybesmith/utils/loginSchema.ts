import Joi from 'joi';

export = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
