'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    'cart',
    {
      amount: DataTypes.INTEGER,
    },
    {}
  );
  cart.associate = function (models) {
    cart.hasMany(models.product);
    cart.belongsToMany(models.customer, {
      through: 'order',
      foreignKey: 'cartId',
    });
  };
  return cart;
};
