"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bandImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bandImage.belongsTo(models.bandUser, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  bandImage.init({
    images: DataTypes.BLOB
  }, {
    sequelize,
    modelName: "bandImage",
  });
  return bandImage;
};