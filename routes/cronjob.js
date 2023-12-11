const express = require("express");
const router = express.Router();
const job = require('../scheduled')

router.get('/cronjob', async (req, res) => {
    try{
        await job()
        res.send('Mails sent succesfully')
    }catch(err){
        res.status(500).end('Internal server error')
    }
})


module.exports = router;


