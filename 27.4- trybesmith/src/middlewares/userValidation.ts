import { Request, Response, NextFunction } from 'express';
import userSchema from '../../utils/userSchema';

// https://stackoverflow.com/questions/58726874/removing-special-characters-from-hapi-joi-error-messages

const options = {

  errors: {
    wrap: {
      label: '',
    },
  },
};

export default async function validateBody(req:Request, res:Response, next:NextFunction) {
  const { username, classe, level, password } = req.body;
  const { error } = await userSchema.validate({ username, classe, level, password }, options);
  
  if (error) {
    const capitalizeError = error.message.charAt(0).toUpperCase() + error.message.slice(1);
    if (error.message.includes('required')) {
      return res.status(400).json({ error: capitalizeError });
    }
    return res.status(422).json({ error: capitalizeError });
  }   
  
  next();
}
