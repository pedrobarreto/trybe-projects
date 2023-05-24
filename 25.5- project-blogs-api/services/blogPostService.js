const { BlogPost, User, Category } = require('../models');
const { decodeToken } = require('../utils/tokenJWT');

const createPost = async ({ authorization, title, content, categoryIds }) => {
const { userId } = await decodeToken(authorization);
  return BlogPost.create({ userId, title, content, categoryIds });
};

const getAllPosts = async () => {
  try {
  return BlogPost.findAll({
    include: 
    [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  } catch (e) {
  return { message: 'Erro' };
}
};

const filterPost = async (key, value) => {
  try {
  const post = await BlogPost.findOne({
    where: { [key]: value },
    include: 
    [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  }); 
    if (!post) { return false; }
    return post;
  } catch (e) {
  return { message: 'Erro' };
}
};

const updatePost = async ({ id, title, content }) => 
  BlogPost.update({ title, content },
        { where: { id } }); 

const deletePost = async ({ id }) => BlogPost.destroy({ where: { id } }); 
  
module.exports = {
  createPost,
  getAllPosts,
  filterPost,
  updatePost,
  deletePost,
};