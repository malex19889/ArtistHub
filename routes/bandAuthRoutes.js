const passport = require("../config/passport");
const router = require("express").Router();
const db = require("../models");

// post route for creating new band
router.post("/register", function (req, res) {
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
    password: req.body.password
  })
    .then(function(dbBandUser) {
      res.json(dbBandUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// post route for loging in band user
router.post("/login",function (req, res, next) {
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

// put route for updating band
router.put("/user", function (req, res) {
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
router.delete("/user/:id", function (req, res) {
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

module.exports = router;