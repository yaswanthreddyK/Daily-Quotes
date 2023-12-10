const express = require('express')
const router = express.Router()
const {generateNewQuote,validateAuthentication, validateEmailAndSubscribe} = require('../services')

router.get('/',(req, res) => {
    const newQuote = generateNewQuote()

    return res.render('index',{
        newQuote,
        user: req.user
    })
})

router.post('/', async (req, res) => {
   const message = await validateEmailAndSubscribe(req.user, req.body.email)
   const newQuote = generateNewQuote()

   res.render('index', {
    message,
    newQuote,
    user: req.user
   })

})

module.exports = router


