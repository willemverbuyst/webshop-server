'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    'tag',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  tag.associate = function (models) {
    tag.belongsToMany(models.product, {
      through: 'product_tags',
      foreignKey: 'tagId',
    });
  };
  return tag;
};
