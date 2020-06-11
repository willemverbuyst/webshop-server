'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_products = sequelize.define(
    'order_products',
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {}
  );
  order_products.associate = function (models) {
    orderProducts.belongsTo(models.product);
    orderProducts.belongsTo(models.order);
  };
  return order_products;
};
