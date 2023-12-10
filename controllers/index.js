const { generateNewQuote, validateEmailAndSubscribe } = require("../services")


function renderHomepage(req, res){
    const newQuote = generateNewQuote()

    return res.render('index',{
        newQuote,
        user: req.user
    })
}

async function handleEmailSubscription(){
    const message = await validateEmailAndSubscribe(req.user, req.body.email)
    const newQuote = generateNewQuote()
 
    res.render('index', {
     message,
     newQuote,
     user: req.user
    })
}


module.exports = {
    renderHomepage,
    handleEmailSubscription
}