module.exports = (sequelize, DataTypes) => {
const BlogPost = sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
},
 { createdAt: 'published',
updatedAt: 'updated',
  tableName: 'BlogPosts',
timestamps: true });
BlogPost.associate = (models) => {
 BlogPost.belongsTo(models.User,
  { foreignKey: 'userId', as: 'user' });
  BlogPost.belongsToMany(models.Category,
  { foreignKey: 'postId', otherKey: 'categoryId', through: 'PostsCategories', as: 'categories' });
}; return BlogPost; 
};
