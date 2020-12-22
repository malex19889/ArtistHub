module.exports = function (sequelize, DataTypes) {
  var Favorite = sequelize.define("Favorite", {
    band: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
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
