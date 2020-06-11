'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      cartId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.customer);
    order.belongsTo(models.cart);
  };
  return order;
};
