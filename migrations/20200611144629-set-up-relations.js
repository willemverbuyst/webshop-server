'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('carts', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'tags',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('carts', 'productId');
  },
};
