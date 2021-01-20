const db = require("../models");

module.exports = {

  createUser: function (req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  },

  addfavorite: function (req, res) {
    console.log(req.body);
    db.Favorite.create({
      UserId: req.user.id,
      band: req.body.band.bandName,
      url: req.body.url
    })
      .then(function (dbFavorite) {
        res.json(dbFavorite);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  getFavorites:function (req, res) {
    console.log("Looking for favorites for:", req.params.id);
    db.Favorite.findAll({
      where: {
        userId: req.user.id
      }
    })
      .then(function (dbFavorite) {
        res.json(dbFavorite);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  deleteFavorite:function (req, res) {
    console.log(req.body);
    db.Favorite.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbFavorite) {
        res.json(dbFavorite);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};