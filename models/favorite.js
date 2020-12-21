module.exports = function (sequelize, DataTypes) {
  var Favorite = sequelize.define("Favorite", {
    albumName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true,
    }

  });
  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Favorite;
};
