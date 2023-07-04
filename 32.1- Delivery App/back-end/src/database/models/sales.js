'use strict';
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sales', {
    userId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING
  }, {
    tablename: 'sales',
    underscored: true,
    timestamps: false   
  });
  
  // Uma venda pode ter apenas um usuário e um vendedor
  sale.associate = (models) => {
    sale.belongsTo(models.users, { foreignKey: "userId", as: "user" });
    sale.belongsTo(models.users, {  foreignKey: "sellerId", as: "seller"})
  };
  

  return sale;
};

module.exports = Sale;
