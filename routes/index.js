var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});

router.get('/chosemachine', function(req, res, next) {
  res.render('chosemachine');
});

//lunar lander
router.get('/lunarlander/learn', function(req, res, next) {
  res.render('lunarlander/LLLearn');
});

router.get('/lunarlander/explore', function(req, res, next) {
  res.render('lunarlander/LLExplore');
});

router.get('/lunarlander/gallery', function(req, res, next) {
  res.render('lunarlander/LLGallery');
});

//voyager
router.get('/voyager/learn', function(req, res, next) {
  res.render('voyager/VLearn');
});

router.get('/voyager/explore', function(req, res, next) {
  res.render('voyager/VExplore');
});

router.get('/voyager/gallery', function(req, res, next) {
  res.render('voyager/VGallery');
});

//saturnV
router.get('/saturnV/learn', function(req, res, next) {
  res.render('saturnV/SLearn');
});

router.get('/saturnV/explore', function(req, res, next) {
  res.render('saturnV/SExplore');
});

router.get('/saturnV/gallery', function(req, res, next) {
  res.render('saturnV/SGallery');
});


//gemini
router.get('/gemini/learn', function(req, res, next) {
  res.render('gemini/GLearn');
});

router.get('/gemini/explore', function(req, res, next) {
  res.render('gemini/GExplore');
});

router.get('/gemini/gallery', function(req, res, next) {
  res.render('gemini/GGallery');
});

//apollosoyuz
router.get('/apollosoyuz/learn', function(req, res, next) {
  res.render('apollosoyuz/ASLearn');
});

router.get('/apollosoyuz/explore', function(req, res, next) {
  res.render('apollosoyuz/ASExplore');
});

router.get('/apollosoyuz/gallery', function(req, res, next) {
  res.render('apollosoyuz/ASGallery');
});








module.exports = router;
