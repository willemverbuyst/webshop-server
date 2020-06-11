'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'customers',
      [
        {
          email: 'michelle@obama.com',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'jack@sparrow.com',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'john@doe.com',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  },
};
