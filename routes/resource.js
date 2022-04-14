var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api');     
var cars_controller = require('../controllers/cars'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// Cars ROUTES /// 
 
// POST request for creating a Cars.  
router.post('/resource/cars', cars_controller.cars_create_post); 
 
// DELETE request to delete Cars. 
router.delete('/resource/cars/:id', cars_controller.cars_delete); 
 
// PUT request to update Cars. 
router.put('/resource/cars/:id', 
cars_controller.cars_update_put); 
 
// GET request for one cars. 
router.get('/resource/cars/:id', cars_controller.cars_detail); 
 
// GET request for list of all car items. 
router.get('/resource/cars', cars_controller.cars_list); 
 
module.exports = router;