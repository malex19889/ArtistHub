const passport = require("../config/passport");
const router = require("express").Router();
const db = require("../models");

// get route for homepage - recently added bands, use sequelize timestamp

router.post("/user/login",function (req, res, next) {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
},
passport.authenticate("local"),
(req, res) => {
  console.log("logged in", req.user);
  var userInfo = {
    username: req.user.userName
  };
  res.send(userInfo);
}
);

// post route for creating new band
router.post("/banduser", function (req, res) {
  console.log(req.body);
  db.BandUser.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bandName: req.body.bandName,
    bandBio: req.body.bandBio,
    userName: req.body.userName,
    email: req.body.email,
    genre: req.body.genre,
    contact: req.body.contact,
    youtube: req.body.youtube,
    facebook: req.body.facebook,
    insta: req.body.insta,
    twitter: req.body.twitter,
    password: req.body.password,
  })
    .then(function(dbBandUser) {
      res.json(dbBandUser);
    });
});

// put route for updating band
router.put("/BandUser", function (req, res) {
  console.log(req.body);
  db.BandUser.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbBandUser) {
      res.json(dbBandUser);
    });
});

// delete route for deleting band
router.delete("/BandUser/:id", function (req, res) {
  console.log(req.body);
  db.BandUser.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbBandUser) {
      res.json(dbBandUser);
    });
});

// post route for adding band members
router.post("/BandMember", function (req, res) {
  console.log(req.body);
  db.BandMember.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contact: req.body.contact,
    bandRole: req.body.bandRole,
    facebook: req.body.facebook,
    insta: req.body.insta,
    twitter: req.body.twitter,
    BandUserId: req.body.BandUserId
  })
    .then(function(dbBandMember) {
      res.json(dbBandMember);
    });
});

// post route for adding favorites, boolean value
router.post("/Favorite", function (req, res) {
  console.log(req.body);
  db.Favorite.create({
    band: req.body.band,
    url: req.body.url,
  })
    .then(function(dbFavorite) {
      res.json(dbFavorite);
    });
});

// get route for favorites page, set of URLs for band homepages

// delete route for favorites
router.delete("/Favorite/:id", function (req, res) {
  console.log(req.body);
  db.Favorite.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbFavorite) {
      res.json(dbFavorite);
    });
});

// post, get, delete route for tour dates - this needs a model



module.exports = router;
