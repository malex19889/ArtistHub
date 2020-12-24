module.exports = function (sequelize, DataTypes) {
  var TourDate = sequelize.define("Favorite", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    ticketPrice: {
      type: DataTypes.STRING,
      allowNull: TRUE,
      unique: TRUE,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: TRUE,
      unique: TRUE,
    },
  });
  TourDate.associate = (models) => {
    TourDate.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return TourDate;
};
