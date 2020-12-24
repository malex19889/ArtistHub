module.exports = function (sequelize, DataTypes) {
  var BandImage = sequelize.define("BandImage", {
    images: {
      type: DataTypes.BLOB,
      allowNull: false,
      unique: false,
    },
  });
  BandImage.associate = (models) => {
    BandImage.belongsTo(models.BandUser, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return BandImage;
};
