const {CronJob} = require('cron')
const User = require('./models/user')
const googleUser = require('./models/googleUser')
const { generateNewQuote, sendAMail } = require('./services')

const job = new CronJob(
    '0 6 * * * ', async () => {
      const users = await User.find({subscriber: true})
      const googleUsersProfile = await googleUser.find({subscriber: true})
      const allUsers = users.concat(googleUsersProfile)
      const {quote} = generateNewQuote()
      console.log(quote)
      const ejs = require('ejs')
      const path = require('path')

      const callback = (err, result) => {
        if(err) console.log(err)
      }
         ejs.renderFile(path.resolve('./views/email.ejs'),{quote}, (err, data) => {
          if(err){
            console.log(err)
          }else{
           allUsers.forEach((user) => {
            const mailOptions = {
              from: `"Daily Quotes" ${process.env.EMAIL}`,
              to: user.email,
              subject: 'Quote for the day',
              html: data
            }
            sendAMail(mailOptions, callback)
      })
          }
          
        })
    }
)

module.exports = job