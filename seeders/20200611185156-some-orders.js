'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'orders',
      [
        {
          date: '11/04/2020',
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: '11/02/2020',
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: '21/04/2019',
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: '19/10/2020',
          customerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: '11/12/2019',
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
