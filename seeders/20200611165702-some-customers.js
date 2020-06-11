'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'Michelle Obama',
          email: 'michelle@obama.com',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jack Sparrow',
          email: 'jack@sparrow.com',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Doe',
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
