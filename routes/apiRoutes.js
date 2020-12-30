const passport = require("../config/passport");
const router = require("express").Router();
const db = require("../models");

// post route for creating new band
router.post("/banduser", function (req, res) {
  console.log(req.body);
  db.bandUser.create({
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

// post route for loging in band user
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

// put route for updating band
router.put("/banduser", function (req, res) {
  console.log(req.body);
  db.bandUser.update(req.body,
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
router.delete("/banduser/:id", function (req, res) {
  console.log(req.body);
  db.bandUser.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbBandUser) {
      res.json(dbBandUser);
    });
});

// post route for adding band members
router.post("/bandmember", function (req, res) {
  console.log(req.body);
  db.bandMember.create({
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
router.post("/favorites", function (req, res) {
  console.log(req.body);
  db.favorite.create({
    band: req.body.band,
    url: req.body.url,
  })
    .then(function(dbFavorite) {
      res.json(dbFavorite);
    });
});

// delete route for favorites
router.delete("/favorites/:id", function (req, res) {
  console.log(req.body);
  db.favorite.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbFavorite) {
      res.json(dbFavorite);
    });
});

// post route for tourDate
router.post("/tourdate", function (req, res) {
  console.log(req.body);
  db.tourDate.create({
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    ticketPrice: req.body.ticketPrice,
    notes: req.body.notes,
    BandUserId: req.body.BandUserId
  })
    .then(function(dbTourDate) {
      res.json(dbTourDate);
    });
});

// put route for updating tourDate
router.put("/tourdate", function (req, res) {
  console.log(req.body);
  db.tourDate.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbTourDate) {
      res.json(dbTourDate);
    });
});

// delete route for tourDate
router.delete("/tourdate/:id", function (req, res) {
  console.log(req.body);
  db.tourDate.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbTourDate) {
      res.json(dbTourDate);
    });
});

// get route for homepage - recently added bands, use sequelize timestamp
// below is just a template
router.get("/home", function (req,res) {
  console.log(req.body);
  db.bandUser.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(dbBandUser){
    res.json(dbBandUser);
  });
});

module.exports = router;
