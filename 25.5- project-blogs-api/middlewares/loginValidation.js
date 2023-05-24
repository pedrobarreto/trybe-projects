const service = require('../services/userService');
const schema = require('../utils/loginSchema');

 module.exports = {
    async validateLogin(req, res, next) {
    let userExists; 
    const { email, password } = req.body;
    const { error } = schema.validate({ email, password });

    if (email) { 
      userExists = await service.filterUser({ where: { email } });
      }

    if (error) {
      return res.status(400).json({ message: error.message });
       }
       if (!userExists) {
         return res.status(400).json({ message: 'Invalid fields' });
          }
    next();
},
 };
