'use strict';
const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    tablename: 'products',
    underscored: true,
    timestamps: false   
  });

  return product;
};

module.exports = Product;
