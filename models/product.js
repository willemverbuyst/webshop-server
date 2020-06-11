'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      popularity: DataTypes.INTEGER,
    },
    {}
  );
  product.associate = function (models) {
    product.belongsToMany(models.tag, {
      through: 'product_tags',
      foreignKey: 'productId',
    });
    product.belongsToMany(models.order, {
      through: 'order_products',
      foreignKey: 'productId',
    });
  };

  return product;
};
