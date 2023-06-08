import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../../utils/tokenJWT';

export default async function validateAuth(req:Request, res:Response, next:NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  const decode = await decodeToken(authorization);
  if (decode.message) {
    return res.status(401).json({ error: decode.message });
  }
 
  req.body.userId = decode.id;
  
  next();
}