const db = require("../models");
const dateFormat = require("dateformat");
module.exports = {

  createBand: function (req, res) {
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
      bannerImage: req.body.bannerImage,
      youtube: req.body.youtube,
      facebook: req.body.facebook,
      insta: req.body.insta,
      twitter: req.body.twitter,
      password: req.body.password
    })
      .then(function (dbBandUser) {
        res.json(dbBandUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  addBandMember: function (req, res) {
    console.log(req.body);
    db.BandMember.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contact: req.body.memberContact,
      bandRole: req.body.bandRole,
      facebook: req.body.facebook,
      insta: req.body.insta,
      image: req.body.image,
      twitter: req.body.twitter,
      BandUserId: req.user.id
    })
      .then(function (dbBandMember) {
        res.json(dbBandMember);
      });
  },

  // deleteBand:function (req, res) {
  //   console.log(req.body);
  //   db.Favorite.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbFavorite) {
  //       res.json(dbFavorite);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // },

  addTourDate: function (req, res) {
    console.log(req.body);
    db.TourDate.create({
      tourName: req.body.tourName,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      ticketPrice: req.body.ticketPrice,
      notes: req.body.notes,
      BandUserId: req.body.id
    })
      .then(function (dbTourDate) {
        res.json(dbTourDate);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  deleteTourDate: function (req, res) {
    console.log(req.body);
    db.TourDate.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbTourDate) {
        res.json(dbTourDate);
      });
  },

  updateTourDate: function (req, res) {
    console.log(req.body);
    db.TourDate.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbTourDate) {
        res.json(dbTourDate);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  addMerch: function (req, res) {
    console.log("Merch Body: " + req.body);
    console.log("Merch User: " + req.user);
    db.Merch.create({
      itemName: req.body.itemName,
      description: req.body.description,
      price: parseFloat(req.body.price.replace("$", "")),
      image: req.body.image,
      quantity: parseInt(req.body.quantity),
      BandUserId: req.user.id
    })
      .then(function (dbMerchItem) {
        console.log("dbMerchItem", dbMerchItem),
        res.json(dbMerchItem);
      })
      .catch(function (err) {
        console.log("error " + err),
        res.json(err);
      });
  },

  getBandMerch: function(req,res){
    console.log("Looking for merch for band id: " + req.params.id);
    db.Merch.findAll({
      where:{BandUserId:req.params.id}})
      .then(function(dbMerchItems) {
        console.log(dbMerchItems);
        res.json(dbMerchItems.map(m => m.dataValues));
      })
      .catch(err => res.json(err));
  },

  getAllBands: function (req, res) {
    console.log("user object test", req.user);
    db.BandUser.findAll({})
      .then(function (dbBandUsers) {
        res.json(dbBandUsers.map((b) => {
          return { id: b.id, bandName: b.bandName, bandBio: b.bandBio, imgUrl: b.bannerImage, createdAt: dateFormat(b.createdAt, "dddd, mmmm dS, yyyy") };
        }));
      });
  },

  getBandById: function (req, res) {
    console.log("this is my req.user test", req.user);
    console.log("query for band with id:", req.params.id);
    db.BandUser.findOne({ where: { id: req.params.id }, include: [db.BandMember, db.TourDate] })
      .then(function (user) {
        console.log(user.BandMembers.map(bm => bm.dataValues));
        console.log(user.TourDates.map(td => td.dataValues));
        // console.log(user);
        let band = {
          id: user.id,
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
          bannerImage: user.bannerImage,
          bandMembers: user.BandMembers.map(bm => bm.dataValues),
          tour: user.TourDates.map(td => td.dataValues)
        };
        console.log(band);
        res.json(band);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};