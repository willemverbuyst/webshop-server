'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'order_products',
      [
        {
          orderId: 1,
          productId: 2,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 3,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 4,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_products', null, {});
  },
};
