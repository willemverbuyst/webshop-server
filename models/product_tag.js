'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_tag = sequelize.define(
    'product_tag',
    {
      productId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {}
  );
  product_tag.associate = function (models) {
    product_tag.belongsTo(models.tag);
    product_tag.belongsTo(models.product);
  };
  return product_tag;
};
