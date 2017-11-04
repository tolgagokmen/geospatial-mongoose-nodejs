const mongoose = require('mongoose');

/**
 * Location Model
 */
const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Untitled',
    trim: true,
  },
  loc: {
    type: [Number], // [ <longitude>, <latitude> ]
    index: '2d',
  },
});

module.exports = mongoose.model('Location', LocationSchema);
