module.exports = (sequelize, DataTypes) => {
const Category = sequelize.define('Category', {
  name: DataTypes.STRING,
}, {
  underscored: true,
  tableName: 'Categories',
  timestamps: false,
  
});
Category.associate = (models) => {
  Category.belongsToMany(models.BlogPost,
    { foreignKey: 'categoryId', through: 'PostsCategories', as: 'category' });
};
return Category;
};