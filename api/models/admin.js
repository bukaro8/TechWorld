const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'Please enter your name'],
    trim: true,
  },
  email:{
    type:String,
    trim:true,
  },

  password:{
    type:String, 
    trim:true,
  },

  isAdmin:{
    type:Boolean
  },

  isBan:{
    type:Boolean
  },

  direction:{
    type:String,
    trim:true,
  },

  phone:{
    type:Number,
    trim:true,
  },

 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Admin', adminSchema);
