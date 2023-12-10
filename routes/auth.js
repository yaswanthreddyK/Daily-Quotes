const express = require("express");
const router = express.Router();

const passport = require("passport");
const googleUser = require("../models/googleUser");
const {
  renderLoginPage,
  handleUserLogin,
  renderSignupPage,
  handleUserSignup,
  handleUserLogout,
  handleUserEmailVerification,
} = require("../controllers/auth");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/oauth2/redirect/google",
      scope: ["profile", "email"],
    },
    async function verify(accessToken, refreshToken, profile, cb) {
      try {
        console.log("hi");
        let user = await googleUser.findOne({
          username: profile.displayName,
          profileId: profile.id,
        });
        if (!user) {
          await googleUser.create({
            username: profile.displayName,
            profileId: profile.id,
            email: profile.emails[0].value,
          });
          user = {
            username: profile.displayName,
            id: profile.id,
            email: profile.emails[0].value,
          };
        }
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

router.get("/login", renderLoginPage);

router.post("/login", handleUserLogin);

router.get("/signup", renderSignupPage);

router.post("/signup", handleUserSignup);

router.get("/login/federated/google", passport.authenticate("google"));
router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
);

router.get("/logout", handleUserLogout);

router.get("/verify/:id", handleUserEmailVerification);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.profileId, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = router;
