var tea = require('../models/tea'); 
 
/// List of all tea 
exports.tea_list = async function(req, res) { 
    try{ 
        thetea = await tea.find(); 
        res.send(thetea); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific tea. 
exports.tea_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tea.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle tea create on POST. 
exports.tea_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tea(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tea_type":"goat", "cost":12, "size":"large"} 
    document.tea_type = req.body.tea_type; 
    document.flavour = req.body.flavour; 
    document.tea_price = req.body.tea_price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle tea delete form on DELETE. 
exports.tea_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tea delete DELETE ' + req.params.id); 
}; 
 
// Handle tea update form on PUT. 
exports.tea_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tea.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.tea_type)  
               toUpdate.tea_type = req.body.tea_type; 
        if(req.body.flavour) toUpdate.flavour = req.body.flavour; 
        if(req.body.tea_price) toUpdate.tea_price = req.body.tea_price;  
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
};  

// VIEWS 
// Handle a show all view 
exports.tea_view_all_Page = async function(req, res) { 
    try{ 
        thetea = await tea.find(); 
        res.render('tea', { title: 'tea Search Results', results: thetea }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 