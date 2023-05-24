const schema = require('../utils/categorySchema');
const { filterCategory } = require('../services/categoryService');
const updateSchema = require('../utils/blogUpdateSchema');

 module.exports = {
    async validateBody(req, res, next) {
    const { name } = req.body;
    const { error } = schema.validate({ name });

    if (error) {
   return res.status(400).json({ message: error.message });
    } 
    next();
},
async validateCategory(req, res, next) {
    const { categoryIds } = req.body;
    const category = await filterCategory(categoryIds);
    if (category) {
   return res.status(400).json({ message: '"categoryIds" not found' });
    } 
    next();
},
async blockCat(req, res, next) {
    const { title, content, categoryIds } = req.body;
    const { error } = updateSchema.validate({ title, content });
    if (categoryIds) {
      return res.status(400).json({ message: 'Categories cannot be edited' });
       } 
    if (error) {
      return res.status(400).json({ message: error.message });
       } 
    next();
  },
 };
