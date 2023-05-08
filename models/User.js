const mongoose = require('mongoose');
const uuid = require('uuid').v4;

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
    required: [true, 'Please provide an username']
  },
  age: {
    type: Number,
    required: [true, 'Please provide an age']
  },
  hobbies: {
    type: [String],
    required: [true, 'Please provide hobbies']
  }
});


// Generate unique user id for every user before saving
userSchema.pre('save', function (next) {
  this._id = uuid();
  next();
});

module.exports = mongoose.model('User', userSchema);
