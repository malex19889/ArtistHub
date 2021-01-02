"use strict";
var bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const bandUser = sequelize.define("bandUser", {
    bandName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bandBio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 800]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    youtube: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    insta: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
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