var express = require('express');
var router = express.Router();

//LOADING ALL MODELS
var voyager = require('../3Dmodels/voyager.json');
var gemini = require('../3Dmodels/gemini.json');
var saturnV = require('../3Dmodels/saturnV.json');
var lunarlander = require('../3Dmodels/lunarlander.json');
var apollosoyuz = require('../3Dmodels/apollosoyuz.json');

var saturnVhor = require('../3Dmodels/saturnVhor.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//MODEL routes for getting json
router.get('/models/voyager', function(req, res, next) {
  res.json(voyager);
});

router.get('/models/gemini', function(req, res, next) {
  res.json(gemini);
});

router.get('/models/saturnV', function(req, res, next) {
  res.json(saturnV);
});

router.get('/models/lunarlander', function(req, res, next) {
  res.json(lunarlander);
});

router.get('/models/apollosoyuz', function(req, res, next) {
  res.json(apollosoyuz);
});

module.exports = router;
