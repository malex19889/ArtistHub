
const router = require("express").Router();
const db = require("../models");


router.get("/api/bands", function (req, res) {
  console.log(res);
  db.BandUser.findAll({

  }).then(function (dbBandUsers) {
    res.json(dbBandUsers.map((b) => {
      return { id: b.id, bandName: b.bandName, bandBio: b.bandBio, imgUrl: b.bannerImage, createdAt: b.createdAt };
    }));
  });
});