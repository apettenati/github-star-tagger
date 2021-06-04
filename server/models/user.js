const mongoose = require('mongoose')

const Schema = mongoose.Schema

const starSchema = new Schema({ starID: Number, tags: [String] })

const userSchema = new Schema({
  username: { type: String, required: true, trim: true, },
  stars: [starSchema]
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User