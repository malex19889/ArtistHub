"use strict";
var bcrypt = require("bcrypt");
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bandUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
    }*/
  }
  bandUser.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bandName: DataTypes.STRING,
    bandBio: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    genre: DataTypes.STRING,
    contact: DataTypes.STRING,
    youtube: DataTypes.STRING,
    facebook: DataTypes.STRING,
    insta: DataTypes.STRING,
    twitter: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: "bandUser",
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  bandUser.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // In this case, before a User is created, we will automatically hash their password
  bandUser.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  // setup band association to their members
  bandUser.associate = function (models) {
    bandUser.hasMany(models.bandMember, {
      onDelete: "cascade"
    });
  };
  bandUser.associate = function (models) {
    bandUser.hasMany(models.bandImage, {
      onDelete: "cascade"
    });
  };
  bandUser.associate = function (models) {
    bandUser.hasMany(models.tourDate, {
      onDelete: "cascade"
    });
  };
  return bandUser;
};