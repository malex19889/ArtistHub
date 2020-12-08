const mongoose = require("mongoose");
// eslint-disable-next-line no-unused-vars
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // user name
  userName: {
    type: String,
    required: true
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
