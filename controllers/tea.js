var tea = require('../models/tea'); 
 
/// List of all teas 
exports.tea_list = async function(req, res) { 
    try{ 
        theteas = await tea.find(); 
        res.send(theteas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific tea. 
exports.tea_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tea detail: ' + req.params.id); 
}; 
 
// Handle tea create on POST. 
exports.tea_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tea create POST'); 
}; 
 
// Handle tea delete form on DELETE. 
exports.tea_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tea delete DELETE ' + req.params.id); 
}; 
 
// Handle tea update form on PUT. 
exports.tea_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tea update PUT' + req.params.id); 
}; 