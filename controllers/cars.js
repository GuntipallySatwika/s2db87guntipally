var cars = require('../models/cars'); 
 
// List of all cars 
exports.cars_list = async function(req, res) { 
    try{ 
        thecars = await cars.find(); 
        res.send(thecars); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Cars. 
exports.cars_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: car detail: ' + req.params.id); 
}; 
 
// Handle Cars create on POST. 
exports.cars_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car create POST'); 
}; 
 
// Handle Cars delete form on DELETE. 
exports.cars_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id); 
}; 
 
// Handle Car update form on PUT. 
exports.cars_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id); 
}; 