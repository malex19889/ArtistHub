const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use("user-local",
  new LocalStrategy(
    {
      usernameField: "userName"
    },
    (userName, password, done) => {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          userName: userName
        }
      }).then(dbUser => {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        // eslint-disable-next-line brace-style
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);
passport.use("band-local",
  new LocalStrategy(
    {
      usernameField: "userName"
    },
    (userName, password, done) => {
      // When a user tries to sign in this code runs
      db.BandUser.findOne({
        where: {
          userName: userName
        }
      }).then(dbUser => {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        // eslint-disable-next-line brace-style
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

// need logic to handle bot kids of user
passport.serializeUser((user, cb) => {
  // console.log("passport serialize function check",user);
  let userData = {id: user.id, isFan: user.isFan, isBand: user.isBand};
  cb(null, userData);
});

passport.deserializeUser((obj, cb) => {
  // console.log("passport deserialize function check",obj);
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
