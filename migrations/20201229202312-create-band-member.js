"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bandMembers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      bandRole: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
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
    await queryInterface.dropTable("bandMembers");
  }*/
};