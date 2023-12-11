require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3000
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const cronRoute = require('./routes/cronjob')
const connectToDatabase = require('./database')
const { validateAuthentication } = require('./services')

connectToDatabase(process.env.MONGO_URI).then(() => console.log("Connected to Database"))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve('./public')))
app.use(session({
    secret: "Top Secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/daily-quotes",
        collectionName: "sessions"
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.authenticate('session'))


app.use('/run', cronRoute)
app.use('/auth', authRouter) 
app.use('/',validateAuthentication(),indexRouter)
app.get('/*', (req, res) => {
    res.render('error', {
        message: "404 page not found!"
    })
})




app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))