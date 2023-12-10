const mongoose = require('mongoose')

function connectToDatabase(URI){
    return mongoose.connect(URI)
}

module.exports = connectToDatabase