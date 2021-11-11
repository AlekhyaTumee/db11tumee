var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tea_controller = require('../controllers/tea'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// tea ROUTES /// 
 
// POST request for creating a tea.  
router.post('/teas', tea_controller.tea_create_post); 
 
// DELETE request to delete tea. 
router.delete('/teas/:id', tea_controller.tea_delete); 
 
// PUT request to update tea. 
router.put('/teas/:id', 
tea_controller.tea_update_put); 
 
// GET request for one tea. 
router.get('/teas/:id', tea_controller.tea_detail); 
 
// GET request for list of all tea items. 
router.get('/teas', tea_controller.tea_list); 
 
module.exports = router; 