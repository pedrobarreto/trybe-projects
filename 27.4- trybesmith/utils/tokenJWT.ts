import dotenv from 'dotenv';
import { sign, verify } from 'jsonwebtoken';
import { DToken, SToken } from '../src/interfaces/user';

dotenv.config();

export const signToken = async (token:SToken) => 
  sign(token, 'trybe', {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

export const decodeToken = async (token:string) => {
  try {
    const response = await verify(token, 'trybe'); 
    return response as DToken;
  } catch (err) {
    return { message: 'Invalid token' };
  }
};
