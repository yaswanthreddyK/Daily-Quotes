const express = require('express')
const router = express.Router()
const { renderHomepage, handleEmailSubscription } = require('../controllers')

router.get('/', renderHomepage)

router.post('/', handleEmailSubscription)

module.exports = router


