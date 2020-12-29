"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("BandUsers", [{
      firstName: "John",
      // createAt: new Date(),
      // updatedAt: new Date()
      isBetaMember: false
    },
    {
      lastName: "doedjksjlj",
      isBetaMember: false
    //   createAt: new Date(),
    //   updatedAt: new Date()
    },
    {
      bandName: "Bad at Codding",
      isBetaMember: false
      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      bandBio: "just playing bad music",
      isBetaMember: false
      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      userName: "coddingHorrible",
      isBetaMember: false
      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      email: "badcodding@gmail.com",
      isBetaMember: false
      // createAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
