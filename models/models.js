module.exports = function (sequelize, DataTypes) {
  var Band = sequelize.define("Band", {
    albumName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    albumArt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    biography: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    socialmedialink: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    bandphotos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tourdates: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tourcities: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    bandcontact: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

  });
  Band.associate = (models) => {
    Band.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Band;
};
