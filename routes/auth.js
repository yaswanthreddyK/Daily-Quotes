const express = require("express");
const router = express.Router();

const passport = require("passport");
const googleUser = require("../models/googleUser");
const {verifyEmail, generateToken} = require('../services');
const User = require('../models/user');

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
        
        try{
          
            let user = await googleUser.findOne({username: profile.displayName, profileId: profile.id})
            if(!user){
              await googleUser.create({
                username: profile.displayName,
                profileId: profile.id,
                email: profile.emails[0].value
              })
              user = {
                username: profile.displayName,
                id: profile.id,
                email: profile.emails[0].value
              }
            }
            return cb(null, user)

        }catch(err){
            return cb(err)
        }     
    }
  )
)

router.get("/login", (req, res) => {
  res.render("login");
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email})
  if(!user){
       return res.render('login', {
        message: "User not found!"
       })
  }else{
    if(user.password !== req.body.password){
      return res.render('login',{
        message: 'Incorrect Password!'
      })
    }
    
    if(!user.verified){
      res.render('login', {
        message: "Verify email first! please check your mailbox!"
      })
      
    }
    const token = generateToken(user)
    
    res.cookie('token', token)
    res.redirect('/')
  }
})

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post('/signup', async(req, res) => {

 const user = await User.findOne({$or: [{username: req.body.username}, {email: req.body.email}]})
 const googleUserProfile = await googleUser.findOne({$or: [{username: req.body.username}, {email: req.body.email}]})
  if(user || googleUserProfile){
    return res.render('signup', {
      message: 'Username or Email already exists!'
    })
  } 

 const result = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

verifyEmail(req, res, result.id)

})

router.get("/login/federated/google", passport.authenticate("google"));
router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
);

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        try{
          res.clearCookie('token')
        }catch(err){}
        res.redirect('/auth/login');
      });
})

router.get('/verify/:id', async (req, res) => {
  const id = req.params.id

  try{

  const user = await User.findById(id)
  if(user){
      await User.findByIdAndUpdate(id, {verified: true})
      return res.render('verify', {
        status: 'Your email verification was succesful. Please login!'
      })
    }  
  }catch(err){
    res.status(500).send(err)
  }

  return res.render('verify',{
    status: 'Something went wrong please try again!'
  })
})

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
