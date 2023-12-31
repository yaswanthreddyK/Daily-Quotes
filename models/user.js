const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    subscriber: {
        type: Boolean,
        default: false
     }
})

const User = model('user', userSchema)

module.exports = User

