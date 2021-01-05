const router = require("express").Router();
const db = require("../models");

// post route for adding band members
router.post("/bandmember", function (req, res) {
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
router.post("/favorites", function (req, res) {
  console.log(req.body);
  db.Favorite.create({
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
  db.Favorite.destroy({
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
  db.TourDate.create({
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
  db.TourDate.update(req.body,
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
  db.TourDate.destroy({
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
router.get("/bands", function (req,res) {
  console.log(req.body);
  db.BandUser.findAll({

  }).then(function(dbBandUsers){
    res.json(dbBandUsers.map((b) => {
      return {bandName: b.bandName, bandBio: b.bandBio, imageUrl: "http://" , createdAt: b.createdAt};
    }));
  });
});
/*
router.get("/bands/:id", function (req,res){
  console.log("this is in the bands/:id "+ req.body);
  db.bandUser.id({

  }).then(function(dbBandUsers){
    res.json(dbBandUsers.map((b) => {
      return {bandName:b.bandName, bandBio:b.bandBio,genre: b.genre, contact: b.contact, youtube: b.youtube,
        facebook: b.facebook, insta: b.insta, twitter: b.twitter, bannerImage: b.bannerImage};
    }));
  });
});
*/

module.exports = router;
