"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bandMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bandMember.belongsTo(models.bandUser, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  bandMember.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    contact: DataTypes.STRING,
    bandRole: DataTypes.STRING,
    facebook: DataTypes.STRING,
    insta: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {
    sequelize,
    modelName: "bandMember",
  });
  return bandMember;
};