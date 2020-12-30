"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bandUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      bandName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      bandBio: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 800]
        }
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      youtube: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      facebook: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      insta: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      twitter: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [1]
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  /*down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bandUsers");
  }*/
};