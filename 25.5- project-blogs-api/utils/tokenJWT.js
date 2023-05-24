require('dotenv').config();
const jwt = require('jsonwebtoken'); 

const SECRET = process.env.JWT_SECRET;

const signToken = async (email) => 
 jwt.sign(email, SECRET, {
     algorithm: 'HS256',
     expiresIn: '1h',
   });

   const decodeToken = async (token) => {
     try {
  const response = await jwt.verify(token, SECRET); 
  return response;
    } catch (err) {
      return { message: 'Expired or invalid token' };
    }
    };

   module.exports = { signToken, decodeToken };