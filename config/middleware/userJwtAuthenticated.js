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
  console.log("jwt auth hit",jwtPayload);
  //find the user in db if needed
  if(jwtPayload.isFan){
    return db.User.findByPk(jwtPayload.user.id)
      .then(user => {
      // console.log("jwt test: ",user);
        return cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  }else{
    return cb(err);
  }

}
));

module.exports = passport;