"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tourDates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      ticketPrice: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    await queryInterface.dropTable("tourDates");
  }*/
};