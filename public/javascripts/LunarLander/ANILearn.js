

function setLLLearnPage() {
    $('.pageBtns').velocity("transition.slideUpIn");
  };

$(document).ready(function() {
    window.setTimeout(setLLLearnPage, 1000);

  // $("#missionBtn").on('click', function(){
  //   $("#missionText").toggle();
  // });

  $('#missionBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#missionText').velocity("transition.slideRightBigIn");
        $("#missionBtn").css('background-image', 'url(/images/buttons/lunarlander/MissionH.png)');
    }else{
        $('#missionText').velocity("transition.slideRightBigOut");
        $("#missionBtn").css('background-image', 'url(/images/buttons/lunarlander/MissionA.png)');
    };

    $(this).data('clicks', click+1);

  });

  $('#factsBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#factsText').velocity("transition.slideRightBigIn");
        $("#factsBtn").css('background-image', 'url(/images/buttons/lunarlander/FactsH.png)');
    }else{
        $('#factsText').velocity("transition.slideRightBigOut");
        $("#factsBtn").css('background-image', 'url(/images/buttons/lunarlander/FactsA.png)');
    };
    $(this).data('clicks',click+1);
  });

  $('#crewBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#crewSection').velocity("transition.slideRightBigIn");
        $("#slide1Text").velocity("transition.slideRightBigIn");
        $("#crewBtn").css('background-image', 'url(/images/buttons/lunarlander/CrewH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "lunarlander") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#crewSection').velocity("transition.slideRightBigOut");
        $("#crewBtn").css('background-image', 'url(/images/buttons/lunarlander/CrewA.png)');
        $("#slide1Text").hide();
        $("#slide2Text").hide();
        $("#slide3Text").hide();
        $("#slide4Text").hide();
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "lunarlander") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });

  $('#landingBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#landingvideo').velocity("transition.slideRightBigIn");
        $("#landingBtn").css('background-image', 'url(/images/buttons/landingH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "lunarlander") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#landingvideo').velocity("transition.slideRightBigOut");
        $("#landingBtn").css('background-image', 'url(/images/buttons/landingA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "lunarlander") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });



  var $carousel = $('.carousel'),
    currentSlide, nextSlide;

$('.next').click(function() {
  currentSlide = $carousel.attr('data-slide');
  nextSlide = +currentSlide === 4 ? 1 : +currentSlide + 1;
  $carousel.attr('data-slide', nextSlide);
  if (nextSlide === 1) {
    $("#slide1Text").show();
    $("#slide2Text").hide();
    $("#slide3Text").hide();
    $("#slide4Text").hide();
  } else if (nextSlide === 2) {
    $("#slide1Text").hide();
    $("#slide2Text").show();
    $("#slide3Text").hide();
    $("#slide4Text").hide();
  } else if (nextSlide === 3) {
    $("#slide1Text").hide();
    $("#slide2Text").hide();
    $("#slide3Text").show();
    $("#slide4Text").hide();
  } else if (nextSlide == 4) {
    $("#slide1Text").hide();
    $("#slide2Text").hide();
    $("#slide3Text").hide();
    $("#slide4Text").show();
  }
});

$('.prev').click(function() {
currentSlide = $carousel.attr('data-slide');
nextSlide = currentSlide - 1;
$carousel.attr('data-slide', nextSlide);
if (nextSlide === 1) {
  $("#slide1Text").show();
  $("#slide2Text").hide();
  $("#slide3Text").hide();
  $("#slide4Text").hide();
} else if (nextSlide === 2) {
  $("#slide1Text").hide();
  $("#slide2Text").show();
  $("#slide3Text").hide();
  $("#slide4Text").hide();
} else if (nextSlide === 3) {
  $("#slide1Text").hide();
  $("#slide2Text").hide();
  $("#slide3Text").show();
  $("#slide4Text").hide();
} else if (nextSlide == 4) {
  $("#slide1Text").hide();
  $("#slide2Text").hide();
  $("#slide3Text").hide();
  $("#slide4Text").show();
}
});





});
