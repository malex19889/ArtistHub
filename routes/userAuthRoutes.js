const passport = require("../config/passport");
const router = require("express").Router();
const db = require("../models");

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
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// post route for loging in user
router.post("/user/login",function (req, res, next) {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
},
passport.authenticate("user-local"),
(req, res) => {
  console.log("req",req.sessionID);
  // console.log("logged in", req.user);
  var userInfo = {
    username: req.user.userName,
    sessionId: req.sessionID,
    id: req.user.id
  };
  res.send(userInfo);
}
);

// logout route
router.get("/logout", function (req, res) {
  req.logout();
  const logoutData = {data:"logged out"};
  res.json(logoutData);
});

// put route for updating user
router.put("/login", function (req, res) {
  console.log(req.body);
  db.User.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
});

// delete route for deleting user
router.delete("/login/:id", function (req, res) {
  console.log(req.body);
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbUser) {
      res.json(dbUser);
    });
});

module.exports = router;