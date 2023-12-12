const data = require('./quotes')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const googleUser = require('./models/googleUser')

function generateNewQuote(){
    const randomNumber = Math.floor(Math.random()*125)
    return data[randomNumber]
}

function validateAuthentication(){
   return (req, res, next)=> {
    if(!req.user) { 
         const user = verifyToken(req.cookies["token"])
         if(user){
            req.user = user
            return next()
         }
        return res.redirect('/auth/login')
    }else{
       return next()
    } 
   }
}

function sendAMail(mailOptions, cb){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    transporter.sendMail(mailOptions,cb)
}

 function verifyEmail(req, res, id){
    try{

        const mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Email Verification',
            html: `Click <a href="https://tiny-goat-spacesuit.cyclic.app/auth/verify/${id}">here</a> to verify!`
        }

        const callback = (err, result) => {
            if(err){
                console.log(err)
            }else{
                 res.render('signup', {
                    message: 'We have sent a mail. Please verify!'
                })
            }
        }
     
         sendAMail(mailOptions, callback)

    }catch(err){
        console.log(err)
    }
  
}

 function generateToken(user){
    const payload = {
        username: user.username,
        email: user.email,
        id: user._id
    }
  const secret = process.env.SECRET
    const token =  jwt.sign(payload, secret, { expiresIn: "1d" })
    return token
}

function verifyToken(token){
    try{
        const payload = jwt.verify(token, process.env.SECRET)
        return payload
    }catch(err){
        return null
    }
}

async function validateEmailAndSubscribe(user, email){
    const userDoc = await User.findOne({username: user.username, email})
    const googleUserDoc = await googleUser.findOne({username: user.username, email})
    if(!userDoc && !googleUserDoc){
        return "Please enter your logged in email!"
    }else{
        if(userDoc) await User.updateOne({_id: user.id}, {subscriber: true})
        if(googleUserDoc) await googleUser.updateOne({username: user.username, email}, {subscriber: true})
        return "You are subscribed!"
    }
}



module.exports = {
    generateNewQuote,
    validateAuthentication,
    sendAMail,
    verifyEmail,
    generateToken,
    validateEmailAndSubscribe
}