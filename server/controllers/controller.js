var express = require('express'); 
var router = express.Router();
var Projects = require('../models/project');

router.get('/', function (req, res) {
  Projects.find( function (err, proj) {
    if(err) throw err;
    res.json(proj);
  });
});

//add project
/*router.post('/', function (req, res) {
});*/

//delete a project
/*router.delete('/:id', function (req, res) {
})*/

//update a project
/*router.put('/:id/edit', function (req, res) {

});*/

module.exports = router;