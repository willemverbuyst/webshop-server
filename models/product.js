'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      popularity: DataTypes.INTEGER,
    },
    {}
  );
  product.associate = function (models) {
    product.belongsTo(models.cart);
    product.belongsToMany(models.tag, {
      through: 'product_tags',
      foreignKey: 'productId',
    });
  };
  return product;
};
