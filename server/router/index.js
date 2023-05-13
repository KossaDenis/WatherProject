const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weather-controller');

router.post(
  '/',
  weatherController.create
);

module.exports = router;
