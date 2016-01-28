var express = require('express');
var router = express.Router();
var model = require('../models/comment');

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

router.get('/lunarlander/comments', function(req, res, next) {
  var llComments = [];
  model.find(function(error, comments){
    if (error) console.log(error);
    for (var i in comments) {
      if (comments[i].Owner == "LunarLander") {
        llComments.push(comments[i]);
      }
    }
    res.render('lunarlander/LLComments', {
      comments: llComments
    });
  });


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

router.get('/voyager/comments', function(req, res, next) {
  var voyagerComments = [];
  model.find(function(error, comments){
    if (error) console.log(error);
    for (var i in comments) {
      if (comments[i].Owner == "Voyager") {
        voyagerComments.push(comments[i]);
      }
    }
    res.render('voyager/VComments', {
      comments: voyagerComments
    });
  });


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

router.get('/saturnV/comments', function(req, res, next) {
  var saturnVComments = [];
  model.find(function(error, comments){
    if (error) console.log(error);
    for (var i in comments) {
      if (comments[i].Owner == "SaturnV") {
        saturnVComments.push(comments[i]);
      }
    }
    res.render('saturnV/SComments', {
      comments: saturnVComments
    });
  });


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

router.get('/gemini/comments', function(req, res, next) {
  var geminiComments = [];
  model.find(function(error, comments){
    if (error) console.log(error);
    for (var i in comments) {
      if (comments[i].Owner == "Gemini") {
        geminiComments.push(comments[i]);
      }
    }
    res.render('gemini/GComments', {
      comments: geminiComments
    });
  });

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

router.get('/apollosoyuz/comments', function(req, res, next) {
  var asComments = [];
  model.find(function(error, comments){
    if (error) console.log(error);
    for (var i in comments) {
      if (comments[i].Owner == "ApolloSoyuz") {
        asComments.push(comments[i]);
      }
    }
    res.render('apollosoyuz/ASComments', {
      comments: asComments
    });
  });

});








module.exports = router;
