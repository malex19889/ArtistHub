"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tourDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tourDate.belongsTo(models.bandUser, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  tourDate.init({
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    location: DataTypes.STRING,
    ticketPrice: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: "tourDate",
  });
  return tourDate;
};