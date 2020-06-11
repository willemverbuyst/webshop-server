'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          title: 'Explore the beautiful streets of Venice.',
          image:
            'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 455,
          popularity: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Hike to the summit of the Etna Volcano.',
          image:
            'https://images.pexels.com/photos/4064446/pexels-photo-4064446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 110,
          popularity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Wine tasting in ancient wine cellars.',
          image:
            'https://images.pexels.com/photos/2440524/pexels-photo-2440524.jpeg?cs=srgb&dl=clear-wine-glass-on-a-barrel-2440524.jpg&fm=jpg',
          price: 49,
          popularity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Visit the kitchen of some famous Italian chefs.',
          image:
            'https://images.unsplash.com/photo-1534425582704-65e021820688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 120,
          popularity: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Climb the highest snow capped peaks of Italy.',
          image:
            'https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 330,
          popularity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
