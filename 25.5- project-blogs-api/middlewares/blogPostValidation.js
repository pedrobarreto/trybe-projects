const schema = require('../utils/blogPostSchema');
const service = require('../services/blogPostService');

 module.exports = {
    async validateBody(req, res, next) {
    const { title, content, categoryIds } = req.body;
    const { error } = schema.validate({ title, content, categoryIds });

    if (error) {
   return res.status(400).json({ message: error.message });
    } 
    next();
},
async postNotFound(req, res, next) {
    const { id } = req.params;
    const post = await service.filterPost('id', id);
  
    if (!post) {
     return res.status(404).json({ message: 'Post does not exist' });
    }

next();
},

 };
