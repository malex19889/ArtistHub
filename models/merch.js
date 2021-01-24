module.exports = function (sequelize, DataTypes) {
  var Merch = sequelize.define("Merch", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1,120]
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  Merch.associate = (models) => {
    Merch.belongsTo(models.BandUser, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Merch;
};