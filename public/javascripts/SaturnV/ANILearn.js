

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
      console.log($(this).data);
        $('#timelineText').velocity("transition.slideRightBigIn");
        $("#factsBtn").css('background-image', 'url(/images/buttons/lunarlander/FactsH.png)');
    }else{
        $('#timelineText').velocity("transition.slideRightBigOut");
        $("#factsBtn").css('background-image', 'url(/images/buttons/lunarlander/FactsA.png)');
    };
    $(this).data('clicks',click+1);
  });

  $('#diagramBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#diagramText').velocity("transition.slideRightBigIn");
        $("#diagramBtn").css('background-image', 'url(/images/buttons/diagramH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "saturnV") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#diagramText').velocity("transition.slideRightBigOut");
        $("#diagramBtn").css('background-image', 'url(/images/buttons/diagramA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "saturnV") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });

  $('#launchBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#launchvideo').velocity("transition.slideRightBigIn");
        $("#launchBtn").css('background-image', 'url(/images/buttons/launchH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "saturnV") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#launchvideo').velocity("transition.slideRightBigOut");
        $("#launchBtn").css('background-image', 'url(/images/buttons/launchA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "saturnV") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });


});
