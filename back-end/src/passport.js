const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configuration');
const User = require('./models/Users')


passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false)
    }

    done(null, user);
  } catch (error) {
    done(error, false);
  }

}))

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  //Find the user given the email

  try {

    const user = await User.findOne({ email });
    //If not, handle it
    if (!user) {
      return done(null, false);
    }
    //Check if the password is correct
    const isMatch = await user.isValidPassword(password);
    //If not, handle it
    if (!isMatch) {
      return done(null, false);
    }
    //Otherwise, return the user
    done(null, user);
  } catch (error) {
    done(error, false);
  }



}));