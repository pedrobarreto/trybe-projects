const { sign, verify } = require('jsonwebtoken');
const { readFileSync } = require('fs');

const jwtKey = readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (data) => {
  const token = sign({ data }, jwtKey, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = verify(token, jwtKey);
    return decoded;
  } catch (err) {
    return false;
  }
};

module.exports = { createToken, verifyToken };
