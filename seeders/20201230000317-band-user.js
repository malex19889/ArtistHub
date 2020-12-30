"use strict";

module.exports = {
  up: async (queryInterface) => {
    // Add seed commands here.
    return queryInterface.bulkInsert("bandUsers", [{
      firstName: "Lars",
      lastName: "Ulrich",
      bandName: "Metallica",
      bandBio: "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career",
      userName: "metallica1981",
      email: "example@example.com",
      genre: "metal",
      contact: "contact@metallica.com",
      youtube: "Metallica",
      facebook: "Metallica",
      insta: "metallica",
      twitter: "Metallica",
      password: "entersandman81",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface) => {
    // Add commands to revert seed here.
    return queryInterface.bulkDelete("bandUsers", null, {});
  }
};
