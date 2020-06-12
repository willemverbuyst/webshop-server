'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      date: DataTypes.STRING,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.customer);
    order.belongsToMany(models.product, {
      through: 'order_products',
      foreignKey: 'orderId',
    });
  };

  return order;
};
