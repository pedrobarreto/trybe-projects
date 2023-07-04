'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id'
    },
      quantity: DataTypes.INTEGER,
  }, {
    tablename: 'salesProducts',
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, { otherKey: "saleId", through:salesProducts, as: "sales", foreignKey: 'productId' });

    models.sales.belongsToMany(models.products, { otherKey: "productId",through:salesProducts, as: "products", foreignKey: 'saleId' });
  }

  return salesProducts;
};


module.exports = SalesProducts;
