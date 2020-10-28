const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // a relative path in the callback causes the https to drop to http in the auth flow
      // Some of the solutions here - 
      // 1. Hardcode the complete path.
      // 2. Put the callback url in env file and import it according to the environment (obviously complete path) 
      // 2. Provide additional options (proxy: true) to tell GoogleStrategy to trust all the proxies that it encounters between browser request and our server.
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // we already have a record with the given profile id.
            done(null, existingUser);
          } else {
            // we don't have a user record wih this id, make a new record.
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
          }
        })
    }
  )
);
