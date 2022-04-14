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
 
// for a specific Costume. 
exports.cars_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await cars.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  
 
// Handle Cars create on POST. 
 
exports.cars_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new cars(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"car_company":"audi", "color":pink, "size":400000} 
    document.car_company = req.body.car_company; 
    document.color = req.body.color; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
  
 
// Handle Cars delete form on DELETE. 
exports.cars_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.cars_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cars.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.car_company)  
               toUpdate.car_company = req.body.cars_type; 
        if(req.body.cost) toUpdate.color = req.body.color; 
        if(req.body.size) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.cars_view_all_Page = async function(req, res) { 
    try{ 
        thecars = await cars.find(); 
        res.render('cars', { title: 'Car Search Results', results: thecars }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};