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
    image: req.body.image,
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
    UserId: req.body.authState.id,
    band: req.body.band.bandName,
    url: req.body.url
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

// get route for favorites
router.get("/favorites/:id", function (req, res) {
  console.log("Looking for favorites for:",req.params.id);
  db.Favorite.findAll({
    where: {
      userId: req.params.id
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
    tourName: req.body.tourName,
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

// get route for homepage for added bands for the home page
// below is just a template
router.get("/bands", function (req,res) {
  console.log("user object test",req.user);
  db.BandUser.findAll({

  }).then(function(dbBandUsers){
    res.json(dbBandUsers.map((b) => {
      return {bandName: b.bandName, bandBio: b.bandBio, imageUrl: "http://" , createdAt: b.createdAt};
    }));
  });
});

router.get("/bands/:id", function (req, res) {
  console.log("this is my req.user test",req.user);
  console.log("query for band with id:",req.params.id);
  db.BandUser.findOne({ where: {id: req.params.id}, include: [db.BandMember, db.TourDate]})
    .then(function(user){
      console.log(user.BandMembers.map(bm=> bm.dataValues));
      console.log(user.TourDates.map(td=> td.dataValues));
      // console.log(user);
      let band = {
        firstName: user.firstName,
        lastName: user.lastName,
        bandName: user.bandName,
        bandBio: user.bandBio,
        genre: user.genre,
        contact: user.contact,
        youtube: user.youtube,
        facebook: user.facebook,
        insta: user.insta,
        twitter: user.twitter,
        bannerImage: "https://via.placeholder.com/600x320",
        bandMembers: user.BandMembers.map(bm=> bm.dataValues),
        tour: user.TourDates.map(td=> td.dataValues)};
      console.log(band);
      res.json(band);
    });
});

module.exports = router;

