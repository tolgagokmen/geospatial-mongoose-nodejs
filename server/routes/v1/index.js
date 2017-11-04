const express = require('express');
const locationRoutes = require('./location.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/locations', locationRoutes);

module.exports = router;
