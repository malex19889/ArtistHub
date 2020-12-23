module.exports = function (sequelize, DataTypes) {
  var BandImages = sequelize.define("BandImages", {
    images: {
      type: DataTypes.BLOB,
      allowNull: false,
      unique: false,
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
