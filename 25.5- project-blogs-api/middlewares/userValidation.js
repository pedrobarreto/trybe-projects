const service = require('../services/userService');
const schema = require('../utils/userSchema');

 module.exports = {
    async validateBody(req, res, next) {
    let userExists; 
    const { displayName, email, password } = req.body;
    const { error } = schema.validate({ displayName, email, password });

    if (email) { 
    userExists = await service.filterUser({ where: { email } });
    }

    if (error) {
   return res.status(400).json({ message: error.message });
    }
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
       }
       
    next();
},
async validateId(req, res, next) {
   const { id } = req.params;
   const userExists = await service.filterUser({ where: { id } });

   if (!userExists) {
      return res.status(404).json({ message: 'User does not exist' });
       }
next();
},
 };
