const passport = require("../config/passport");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../controllers/auth-controller");


router.route("/band")
  .post( function (req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("band-local"),
  (req, res) => {
    console.log("logged in", req.user.userName);
    var userInfo = {
      username: req.user.userName,
      sessionId: req.sessionID,
      id: req.user.id
    };
    const token = jwt.sign({user:userInfo},process.env.JWT_SECRET);
    console.log(token);
    res.send(token);
  },
  )
  .put(auth.updateBandUser)
  .delete(auth.deleteBand);

router.route("/user")
  .post( function (req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("user-local"),
  (req, res) => {
    console.log("logged in",req.user.userName);
    var userInfo = {
      username: req.user.userName,
      sessionId: req.sessionID,
      id: req.user.id
    };
    res.send(userInfo);
  }
  )
  .put()
  .delete(auth.deleteUser);

router.route("/logout")
  .get(auth.logout);


module.exports = router;