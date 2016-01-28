var express = require('express');
var router = express.Router();
var model = require('../models/comment');

//get all comments
router.get('/', function(req, res, next) {
  model.find(function(error, comments){
    if (error) console.log(error);
    res.json(comments);
  })
});

//get comments by ID
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id,function(error, comment){
    if (error) console.log(error);
    res.json(comment);
  });
});


//create comment
router.post('/', function(req, res, next) {
  model.create(req.body, function(error, comment){
    if (error) console.log(error);
    console.log(req.body);
    if (req.body.Owner == "LunarLander") {
      res.redirect('/lunarlander/comments');
    } else if (req.body.Owner == "Gemini") {
      res.redirect('/gemini/comments');
    } else if (req.body.Owner == "SaturnV") {
      res.redirect('/saturnV/comments');
    } else if (req.body.Owner == "Voyager") {
      res.redirect('/voyager/comments');
    } else if (req.body.Owner == "ApolloSoyuz") {
      res.redirect('/apollosoyuz/comments');
    }
  });

});

//edit comment
router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, comment){
    if (error) console.log(error);
    res.json(comment);
  });
});

router.patch('/:id', function(req, res, next) {
  var dataToSave = {};
  console.log(';)');
  console.log(req.body);
  model.findByIdAndUpdate(req.params.id, req.body, function(error, comment){
    if (error) console.log(error);
    res.json(comment);
  });
});

//delete comment
router.delete('/:id', function(req, res, next){
  model.findByIdAndRemove(req.params.id, req.body, function(error,comment){
    if(error) console.log(error);
    res.json(comment);
  });

//

});

module.exports = router;
