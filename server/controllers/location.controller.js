const mongoose = require('mongoose');

const Location = require('../models/location.model');

const EARTH_RADIUS = 6371; // The radius of Earth is 6371 km

const listLocations = (req, res, next) => {
  Location.find()
    .exec((err, locations) => {
      if (err) {
        res.json({
          success: false,
          status: 500,
          error: err,
        });
        return next(err);
      }
      return res.json({
        success: true,
        status: 200,
        data: locations,
      });
    });
};

const findLocation = (req, res, next) => {
  // Limit of resource
  const limit = req.query.limit || 10;

  // Max distance (kilometers)
  let maxDistance = req.query.distance || 8;

  // Convert the distance to radians
  maxDistance /= EARTH_RADIUS;

  // Coordinates [ <longitude>, <latitude> ]
  const coords = [req.query.longitude || 0, req.query.latitude || 0];

  // Find location
  Location.find({
    loc: {
      $near: coords,
      $maxDistance: maxDistance,
    },
  })
    .limit(limit)
    .exec((err, locations) => {
      if (err) {
        res.json({
          success: false,
          status: 500,
          error: err,
        });
        return next(err);
      }
      return res.json({
        success: true,
        status: 200,
        data: locations,
      });
    });
};

module.exports = { listLocations, findLocation };
