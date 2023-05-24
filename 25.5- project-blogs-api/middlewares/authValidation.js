 const { decodeToken } = require('../utils/tokenJWT');
 const { filterPost } = require('../services/blogPostService');
 
 module.exports = {
  async validateAuth(req, res, next) {
    const { authorization } = req.headers;
    const decode = await decodeToken(authorization);

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (decode.message) {
      return res.status(401).json({ message: decode.message });
    }
    next();
  },
  async validateId(req, res, next) {
    const { authorization } = req.headers;
    const { id } = req.params;
    const { userId } = await decodeToken(authorization);
    const { userId: IdFromDb } = await filterPost('id', +id);
    if (IdFromDb !== userId) { 
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
  },
};