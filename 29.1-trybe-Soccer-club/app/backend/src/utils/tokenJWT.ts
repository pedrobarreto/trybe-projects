import { sign, verify } from 'jsonwebtoken';
import { writeFile, readFileSync } from 'fs';
import { SToken, DToken } from '../interfaces/user';

const SECRET = readFileSync('jwt.evaluation.key', 'utf-8');

export const signToken = async (token:SToken) =>
  sign(token, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

export const writeToken = async (token:string) => {
  writeFile('authToken.key', token, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

export const decodeToken = async (token:string) => {
  try {
    const response = await verify(token, SECRET);
    return response as DToken;
  } catch (err) {
    return { message: 'Invalid token' };
  }
};
