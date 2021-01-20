const db = require("../models");


module.exports = {
  logout: function (req, res) {
    req.logout();
    res.send({ msg: "logging out" });
  },
  deleteUser: function (req, res) {
    console.log(req.body);
    db.User.destroy({
      where: {
        id: req.user.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  },
  deleteBand: function (req, res) {
    console.log(req.body);
    db.BandUser.destroy({
      where: {
        id: req.user.id
      }
    })
      .then(function(dbBandUser) {
        res.json(dbBandUser);
      });
  }
};