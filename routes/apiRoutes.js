const passport = require("../config/passport");
const router = require("express").Router();
const db = require("../models");

// route for loging in user
router.post("/login", passport.authenticate("local"), function(req, res) {
  res.redirect("/");
});

// route for creating a new user
router.post("/register", function (req, res) {
  console.log(req.body);
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect("/");
    })
    .catch(function (err) {
      res.redirect("/noMatch",err);
    });
});

// post, delete, put route for creating new band

// post route for adding band members

// post route for adding favorites, boolean value
// get route for favorites page, set of URLs for band homepages
// delete route for favorites

// post, get, delete route for tour dates



module.exports = router;
