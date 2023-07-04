const UserService = require('../service/userService');
const { loginSchema } = require('../schema/userSchema');
const { verifyToken } = require('../utils/utilsJWT');

const userValidation = async (req, res, next) => {
  const notFound = { message: 'User not found' };
  const PassIncorrect = { message: 'Password incorrect' };
  
  const validLogin = loginSchema.validate(req.body);

  if (validLogin.error) return res.status(400).json({ message: validLogin.error.message });

  const userRegistered = await UserService.login(req.body);

  if (!userRegistered) return res.status(404).json(notFound);

  if (!userRegistered.password) return (res.status(400).json(PassIncorrect));

  const { password, ...user } = userRegistered;

  req.body.user = user;

next();
};

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const notFound = { message: 'Id not found' };

  const validId = await UserService.getById(+id);

  if (!validId) return res.status(404).json(notFound);

  next();
};

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: 'Token not found' });
  }

  const validToken = verifyToken(authorization);

  if (!validToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
next();
};

module.exports = { userValidation, idValidation, validateToken };