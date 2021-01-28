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
  },
  updateBandUser: function(req,res){
    console.log(req.body);
    db.BandUser.update({
      bandName: req.body.bandName,
      bandBio: req.body.bandBio,
      genre: req.body.genre,
      contact: req.body.contact,
      youtube: req.body.youtube,
      facebook: req.body.facebook,
      insta: req.body.insta,
      twitter: req.body.twitter},
    {where: {id:req.user.id}}
    )
      .then(dbBandUser=>{
        console.log(dbBandUser);
        res.json(dbBandUser);
      })
      .catch(err=>{
        console.log(err);
        res.json(err);
      });
  }
};