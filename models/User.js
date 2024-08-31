const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-binary', 'Other'],
    required: true,
  },
});

// Ensure this line exports the model correctly
const User = mongoose.model('User', userSchema);

module.exports = {User};
