const { Schema, model } = require('mongoose')

const credentialSchema = new Schema({
   username: {
    type: String,
    required: true,
   },
   profileId: {
    type: String,
    required: true,
    unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   subscriber: {
      type: Boolean,
      default: false
   }
})

const googleUser = model('federated_credentials', credentialSchema)

module.exports = googleUser