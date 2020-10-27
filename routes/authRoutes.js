const passport = require("passport");

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
  	// Passport automatically attaches user to the req object with some other funtions.
  	// logout is also attached and can be used to expire the cookie.
  	req.logout();
  	// req.user is destroyed by passport, we should see a empty screen
  	res.send(req.user);
  })

  app.get('/api/current_user', (req, res) => {
  	res.send(req.user);
  });
}
