module.exports = function (sequelize, DataTypes) {
  var TourDate = sequelize.define("TourDate", {
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
      validate: {
        len: [1]
      }
    },
    ticketPrice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  TourDate.associate = (models) => {
    TourDate.belongsTo(models.BandUser, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return TourDate;
};
