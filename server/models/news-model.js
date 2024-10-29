const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
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
  image: {
    type: String,
    required: false
  },
})

module.exports = model('News', NewsSchema);