'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'Michelle Obama',
          email: 'michelle@obama.com',
          password: bcrypt.hashSync('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jack Sparrow',
          email: 'jack@sparrow.com',
          password: bcrypt.hashSync('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Doe',
          email: 'john@doe.com',
          password: bcrypt.hashSync('123', 10),
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
