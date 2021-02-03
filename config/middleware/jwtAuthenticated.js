const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const db = require("../../models");

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : process.env.JWT_SECRET
},
function (jwtPayload, cb) {
  console.log("jwt auth hit");
  //find the user in db if needed
  return db.BandUser.findById(jwtPayload.id)
    .then(user => {
      console.log("jwt test: ");
      return cb(null, user);
    })
    .catch(err => {
      return cb(err);
    });
}
));

module.exports = passport;