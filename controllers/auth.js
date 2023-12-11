const googleUser = require("../models/googleUser");
const User = require("../models/user");
const { generateToken, verifyEmail } = require("../services");



function renderLoginPage(req,res){
        res.render("login");    
}

async function handleUserLogin(req, res){
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
}

function renderSignupPage(req, res){
    res.render("signup");
}

async function handleUserSignup(req, res){
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
}


function handleUserLogout(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        try{
          res.clearCookie('token')
        }catch(err){}
        res.redirect('/auth/login');
      });
}



async function handleUserEmailVerification(req,res){
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
}


module.exports = {
    renderLoginPage,
    handleUserLogin,
    renderSignupPage,
    handleUserSignup,
    handleUserLogout,
    handleUserEmailVerification
}