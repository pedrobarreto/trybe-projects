import { Request, Response, NextFunction } from 'express';
import loginSchema from '../../utils/loginSchema';

// https://stackoverflow.com/questions/58726874/removing-special-characters-from-hapi-joi-error-messages

const options = {

  errors: {
    wrap: {
      label: '',
    },
  },
};

export default async function validateLogin(req:Request, res:Response, next:NextFunction) {
  const { username, password } = req.body;
  const { error } = await loginSchema.validate({ username, password }, options);
  if (error) {
    const capitalizeError = error.message.charAt(0).toUpperCase() + error.message.slice(1);
    return res.status(400).json({ error: capitalizeError });
  } 
  next(); 
}
