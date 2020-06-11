'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'product_tags',
      [
        {
          productId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 1,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_tags', null, {});
  },
};
