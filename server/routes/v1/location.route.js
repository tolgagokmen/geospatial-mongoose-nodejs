const express = require('express');

const controller = require('../../controllers/location.controller');

const router = express.Router();

router
  .route('/')
  /**
   * @api {GET} /v1/locations
   * Find locations
   * @url {{domain}}/api/v1/locations?longitude=23.6&latitude=46.76&limit=1&distance=100
   * @query req.query.longitude
   * @query req.query.latitude
   * @query req.query.limit
   * @query req.query.distance
   */
  .get(controller.findLocation)
  /**
   * @api {POST} /v1/locations
   * Add new location
   * @property req.body.longitude
   * @property req.body.latitude
   * @property req.body.name
   */
  .post(controller.addLocation);

module.exports = router;
