const Location = require('../models/location.model');

// const EARTH_RADIUS = 6371; // The radius of Earth is 6371 km

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
  const limit = parseInt(req.query.limit, 10) || 10;

  // Max distance (meter)
  const maxDistance = parseFloat(req.query.distance) || 8000;

  // Convert the distance to radians
  // maxDistance /= EARTH_RADIUS;

  // Coordinates [ <longitude>, <latitude> ]
  const coords = [req.query.longitude || 0, req.query.latitude || 0];

  // Find location
  Location.find({
    geometry: {
      $nearSphere: {
        $geometry: { type: 'Point', coordinates: coords },
        $maxDistance: maxDistance,
      },
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

const addLocation = (req, res, next) => {
  if (!req.body.longitude || !req.body.latitude) {
    return res.json({
      success: false,
      status: 404,
      error: {
        longitude: 'required',
        latitude: 'required',
      },
    });
  }

  const location = new Location({
    geometry: {
      coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)],
    },
    properties: {
      name: req.body.name || 'Untitled',
    },
  });

  return location.save((err) => {
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
      data: location,
    });
  });
};

module.exports = { listLocations, findLocation, addLocation };
