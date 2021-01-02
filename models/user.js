"use strict";
var bcrypt = require("bcrypt");
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
    }*/
  }
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: "user",
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  user.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // In this case, before a User is created, we will automatically hash their password
  user.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  // setup user association to their albums
  user.associate = function (models) {
    user.hasMany(models.favorite, {
      onDelete: "cascade"
    });
  };
  return user;
};