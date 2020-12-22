module.exports = function (sequelize, DataTypes) {
  var BandMember = sequelize.define("BandMember", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    bandRole: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
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
    }
  });
  BandMember.associate = (models) => {
    BandMember.belongsTo(models.BandUser, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return BandMember;
};