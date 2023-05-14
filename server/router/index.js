const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weather-controller');

router.post(
  '/weather',
  weatherController.create
);

router.get(
  '/weather',
  weatherController.getData
)

module.exports = router;
