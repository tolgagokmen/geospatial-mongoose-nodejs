const mongoose = require('mongoose');

/**
 * Location Model
 */
const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Feature',
  },
  geometry: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [ <longitude>, <latitude> ]
    },
  },
  properties: {
    name: {
      type: String,
      trim: true,
      default: 'Untitled',
    },
  },
});

// Define Geometry index
LocationSchema.index({ geometry: '2dsphere' });

module.exports = mongoose.model('Location', LocationSchema);
