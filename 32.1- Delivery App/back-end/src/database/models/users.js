'use strict';

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    tablename: 'users',
    timestamps: false,
  });

  //1 usuário pode ter várias vendas
  
  user.associate = (models) => {
    user.hasMany(models.sales, {
      foreignKey: 'userId', as: 'user',
    });
    user.hasMany(models.sales, {
      foreignKey: 'sellerId', as: 'seller'
    })
  } 

  return user;
};

module.exports = User;
