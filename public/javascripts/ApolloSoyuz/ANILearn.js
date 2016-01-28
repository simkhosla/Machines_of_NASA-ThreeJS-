

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
        $('#crewGallery').velocity("transition.slideRightBigIn");
        $("#crewBtn").css('background-image', 'url(/images/buttons/lunarlander/crewH.png)');
        for (var i = 2; i < 104; i++) {
        if (scene.children[i].name == "apollosoyuz") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#crewGallery').velocity("transition.slideRightBigOut");
        $("#crewBtn").css('background-image', 'url(/images/buttons/lunarlander/crewA.png)');
        for (var i = 2; i < 104; i++) {
        if (scene.children[i].name == "apollosoyuz") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });

  $('#videoBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#video').velocity("transition.slideRightBigIn");
        $("#videoBtn").css('background-image', 'url(/images/buttons/videoH.png)');
        for (var i = 2; i < 104; i++) {
        if (scene.children[i].name == "apollosoyuz") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#video').velocity("transition.slideRightBigOut");
        $("#videoBtn").css('background-image', 'url(/images/buttons/videoA.png)');
        for (var i = 2; i < 104; i++) {
        if (scene.children[i].name == "apollosoyuz") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });
});
