'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tags',
      [
        {
          name: 'City',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Canals',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Explore',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Adventure',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vino',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Culinary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags', null, {});
  },
};
