module.exports = function (sequelize, DataTypes) {
  var BandImages = sequelize.define("BandImages", {
    images0: {
      type: DataTypes.BLOB,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    images1: {
      type: DataTypes.BLOB,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    images2: {
      type: DataTypes.BLOB,
      allowNull: true,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
  });
  BandImages.associate = (models) => {
    BandImages.belongsTo(models.BandUser, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BandImages;
};
