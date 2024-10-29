const { Schema, model } = require('mongoose');

const PointerSchema = new Schema({
  named: { 
    type: String, 
    uniquie: false, 
    required: true
  },
  description: {
    type: String, 
    uniquie: false, 
    required: false
  },
  latitude: {
    type: Number,
    unique: true,
    required: true
  },
  longitude: {
    type: Number,
    unique: true,
    required: true
  },
  category: {
    type: String,
    unique: false,
    required: true
  },
  opening: {
    type: Number,
    unique: false,
    required: false
  },
  closing: {
    type: Number,
    unique: false,
    required: false
  },
  phone: {
    type: Number,
    unique: false,
    required: false
  },
  image: {
    type: String,
    required: false
  },
})

module.exports = model('Pointer', PointerSchema);