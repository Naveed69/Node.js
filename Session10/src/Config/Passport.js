//used in userApiRoutes.js and index.js

const { JWT_KEY } = require("../Middleware/Authentication");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

var options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY,
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  try {
    console.log("Startergy payload", payload);
    return done(null, true);
  } catch (err) {
    return done(err, false);
  }
});

module.exports = (passport) => {
  passport.use(jwtStrategy);
};
