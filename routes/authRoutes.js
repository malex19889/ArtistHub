const passport = require("../config/passport");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../controllers/auth-controller");


router.route("/band")
  // eslint-disable-next-line no-unused-vars
  .post(function (req, res, next) {

    passport.authenticate("band-local", (err, user, info) => {
      console.log(err);
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : "Login failed",
          user   : user
        });
      }

      req.login(user, (err) => {
        if (err) {
          res.send(err);
        }
        var userInfo = {
          username: user.userName,
          sessionId: req.sessionID,
          isBand: user.isBand,
          id: user.id
        };
        const token = jwt.sign({user:userInfo},process.env.JWT_SECRET);

        return res.json({userInfo, token});
      });
    })
    (req, res);

  })
  .put(auth.updateBandUser)
  .delete(auth.deleteBand);

router.route("/user")
  // eslint-disable-next-line no-unused-vars
  .post(function (req, res, next) {

    passport.authenticate("user-local", (err, user, info) => {
      console.log(err);
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : "Login failed",
          user   : user
        });
      }

      req.login(user, (err) => {
        if (err) {
          res.send(err);
        }
        console.log(user);
        var userInfo = {
          username: user.userName,
          sessionId: req.sessionID,
          isFan: user.isFan,
          id: user.id
        };
        console.log(userInfo);
        const token = jwt.sign({user:userInfo},process.env.JWT_SECRET);

        return res.json({userInfo, token});
      });
    })
    (req, res);

  })
  .put()
  .delete(auth.deleteUser);

router.route("/logout")
  .get(auth.logout);


module.exports = router;