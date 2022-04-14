var express = require('express');
var router = express.Router();
const cars_controllers= require('../controllers/cars');

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', cars_controllers.cars_view_all_Page );
  res.render('cars', { title: 'Search Results cars' });
});

module.exports = router;
