"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("BandUsers", [{
      firstName: "John",
      // createAt: new Date(),
      // updatedAt: new Date()
    },
    {
      lastName: "doedjksjlj",
    //   createAt: new Date(),
    //   updatedAt: new Date()
    },
    {
      bandName: "Bad at Codding",

      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      bandBio: "just playing bad music",
      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      userName: "coddingHorrible",
      // createAt: new Date(),
      // updatedAt: new Date()
    },{
      email: "badcodding@gmail.com",
      // createAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }
};