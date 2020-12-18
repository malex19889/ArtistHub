const Sequelize = require("sequelize");
const sequelize = require("/connection.js");

// Creates a "Band" model that matches up with DB
const Band = sequelize.define("band", {
  
  routeName: Sequelize.STRING,
  bandname: Sequelize.STRING,
  bio: Sequelize.STRING,
  discography: Sequelize.STRING,
  medialink: Sequelize.STRING

});

// Syncs with DB
Band.sync();

// Makes the Band Model available for other files (will also create a table)
module.exports = Band;