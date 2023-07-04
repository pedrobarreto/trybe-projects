const Joi = require('joi');

const userSchema = Joi.object().keys({
    name: Joi.string().min(12).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('seller', 'customer', 'administrator').required(),
});

const loginSchema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
});

module.exports = { userSchema, loginSchema };