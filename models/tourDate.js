module.exports = function (sequelize, DataTypes) {
  var TourDate = sequelize.define("TourDate", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true,
      validate: {
        len: [1]
      }
    }
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