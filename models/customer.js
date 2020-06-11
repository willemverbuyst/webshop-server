'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'customer',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  customer.associate = function (models) {
    customer.belongsToMany(models.cart, {
      through: 'order',
      foreignKey: 'customerId',
    });
  };
  return customer;
};
