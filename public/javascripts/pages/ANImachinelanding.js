function messageAppears() {
  $('.loading').velocity("transition.slideUpOut");
  $('.message').velocity("transition.slideUpIn");
};

function buttonsAppear() {
$('#voyager').velocity("transition.slideUpIn");
$('#gemini').velocity("transition.slideUpIn");
$('#saturnfive').velocity("transition.slideUpIn");
$('#lunarlander').velocity("transition.slideUpIn");
$('#apollosoyuz').velocity("transition.slideUpIn");
};


$(document).ready(function() {
  window.setTimeout(messageAppears, 1200);
  window.setTimeout(buttonsAppear, 1300);

  //voyager button
  $('#voyager').hover(function() {
      //change background
      $('body').addClass('voyagerbackground');
      //hide other buttons
      $('#gemini').velocity("transition.slideDownOut");
      $('#saturnfive').velocity("transition.slideDownOut");
      $('#lunarlander').velocity("transition.slideDownOut");
      $('#apollosoyuz').velocity("transition.slideDownOut");

      $('.message').hide();

      //show text buttons
      $('#voyagerText').velocity("transition.perspectiveLeftIn");

      //hide other models with for loop
      for (var i = 2; i < 7; i++) {
      if (scene.children[i].name == "voyager") {
      scene.children[i].material.visible = true;
      } else {
      scene.children[i].material.visible = false;
      }};

  }, function() {
      //restore body background
      $('body').removeClass('voyagerbackground');
      //show other buttons
      $('#gemini').velocity("transition.slideUpIn");
      $('#saturnfive').velocity("transition.slideUpIn");
      $('#lunarlander').velocity("transition.slideUpIn");
      $('#apollosoyuz').velocity("transition.slideUpIn");

      $('.message').velocity("transition.slideUpIn");

      //hide text
      $('#voyagerText').hide("fast");
      for (var i = 2; i < 7; i++) {
          scene.children[i].material.visible = true;
      }
  });

  //gemini button
  $('#gemini').hover(function() {
      //change background to video
      $('body').addClass('geminibackground');
      //hide other buttons
      $('#voyager').velocity("transition.slideDownOut");
      $('#saturnfive').velocity("transition.slideDownOut");
      $('#lunarlander').velocity("transition.slideDownOut");
      $('#apollosoyuz').velocity("transition.slideDownOut");

      $('.message').hide();

      //show text buttons
      $('#geminiText').velocity("transition.perspectiveLeftIn");

      for (var i = 2; i < 7; i++) {
      if (scene.children[i].name == "gemini") {
      scene.children[i].material.visible = true;
      } else {
      scene.children[i].material.visible = false;
      }};

  }, function() {
      //restore original background
      $('body').removeClass('geminibackground');
      //show other buttons
      $('#voyager').velocity("transition.slideUpIn");
      $('#saturnfive').velocity("transition.slideUpIn");
      $('#lunarlander').velocity("transition.slideUpIn");
      $('#apollosoyuz').velocity("transition.slideUpIn");

      $('.message').velocity("transition.slideUpIn");

      //hide text
      $('#geminiText').hide("fast");
      // $('#geminiText').hide("slow");
      for (var i = 2; i < 7; i++) {
          scene.children[i].material.visible = true;
      }
  });

  //saturn five button
  $('#saturnfive').hover(function() {
      //change body background
      $('body').addClass('saturnVbackground');
      //hide other buttons
      $('#voyager').velocity("transition.slideDownOut");
      $('#gemini').velocity("transition.slideDownOut");
      $('#lunarlander').velocity("transition.slideDownOut");
      $('#apollosoyuz').velocity("transition.slideDownOut");

      $('.message').hide();

      //show text
      $('#saturnfiveText').velocity("transition.perspectiveLeftIn");

      for (var i = 2; i < 7; i++) {
      if (scene.children[i].name == "saturnV") {
      scene.children[i].material.visible = true;
      } else {
      scene.children[i].material.visible = false;
      }};

  }, function() {
      //restore body background
      $('body').removeClass('saturnVbackground');
      //show other buttons
      $('#voyager').velocity("transition.slideUpIn");
      $('#gemini').velocity("transition.slideUpIn");
      $('#lunarlander').velocity("transition.slideUpIn");
      $('#apollosoyuz').velocity("transition.slideUpIn");

      $('.message').velocity("transition.slideUpIn");

      //hide text
      $('#saturnfiveText').hide("fast");
      for (var i = 2; i < 7; i++) {
          scene.children[i].material.visible = true;
      }
  });

  //lunar lander button
  $('#lunarlander').hover(function() {
      //change body background
      $('body').addClass('lunarBackground');
      //hide other buttons
      $('#voyager').velocity("transition.slideDownOut");
      $('#gemini').velocity("transition.slideDownOut");
      $('#saturnfive').velocity("transition.slideDownOut");
      $('#apollosoyuz').velocity("transition.slideDownOut");

        $('.message').hide();

      //show text
      $('#lunarlanderText').velocity("transition.perspectiveLeftIn");

      for (var i = 2; i < 7; i++) {
        if (scene.children[i].name == "lunarlander") {
            scene.children[i].material.visible = true;
        } else {
          scene.children[i].material.visible = false;
        }
      }
    }, function() {
        //restore the background
        $('body').removeClass('lunarBackground');
        //show other buttons
        $('#voyager').velocity("transition.slideUpIn");
        $('#gemini').velocity("transition.slideUpIn");
        $('#saturnfive').velocity("transition.slideUpIn");
        $('#apollosoyuz').velocity("transition.slideUpIn");

        $('.message').velocity("transition.slideUpIn");

        //hide text
        $('#lunarlanderText').hide("fast");
        for (var i = 2; i < 7; i++) {
            scene.children[i].material.visible = true;
        }
    });

  //apollo soyuz button
  $('#apollosoyuz').hover(function() {
      //change the background
      $('body').addClass('apollosoyuzbackground');
      //hide other buttons
      $('#voyager').velocity("transition.slideDownOut");
      $('#gemini').velocity("transition.slideDownOut");
      $('#saturnfive').velocity("transition.slideDownOut");
      $('#lunarlander').velocity("transition.slideDownOut");

      $('.message').hide();

      //show text
      $('#apollosoyuzText').velocity("transition.perspectiveLeftIn");

      for (var i = 2; i < 7; i++) {
      if (scene.children[i].name == "apollosoyuz") {
      scene.children[i].material.visible = true;
      } else {
      scene.children[i].material.visible = false;
      }};

  }, function() {
      //restore the background
      $('body').removeClass('apollosoyuzbackground');
      //show other buttons
      $('#voyager').velocity("transition.slideUpIn");
      $('#gemini').velocity("transition.slideUpIn");
      $('#saturnfive').velocity("transition.slideUpIn");
      $('#lunarlander').velocity("transition.slideUpIn");

      $('.message').velocity("transition.slideUpIn");

      //hide the text
      $('#apollosoyuzText').hide('fast');

      for (var i = 2; i < 7; i++) {
          scene.children[i].material.visible = true;
      }
  });


});
