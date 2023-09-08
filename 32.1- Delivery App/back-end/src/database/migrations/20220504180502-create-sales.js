'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      total_price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,

      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      sale_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        
      }
    });
  },

  down: async(queryInterface) => dropTable('sales'),

};