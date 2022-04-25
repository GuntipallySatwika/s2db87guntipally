var express = require('express');
var router = express.Router();
const cars_controllers= require('../controllers/cars');
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
  router.get('/', cars_controllers.cars_view_all_Page );
  /* GET detail cars page */ 
router.get('/detail', cars_controllers.cars_view_one_Page); 
/* GET create cars page */ 
router.get('/create', cars_controllers.cars_create_Page); 
/* GET create update page */ 
router.get('/update',secured, cars_controllers.cars_update_Page); 
/* GET delete cars page */ 
router.get('/delete', cars_controllers.cars_delete_Page); 
module.exports = router;
