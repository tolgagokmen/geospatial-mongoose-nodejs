const express = require('express');

const controller = require('../../controllers/location.controller');

const router = express.Router();

router
  .route('/')
  /**
   * @api {GET} /v1/locations
   * Get a list of locations
   */
  .get(controller.listLocations)
  /**
   * @api {POST} /v1/locations
   * Find locations
   */
  .post(controller.findLocation);

module.exports = router;
