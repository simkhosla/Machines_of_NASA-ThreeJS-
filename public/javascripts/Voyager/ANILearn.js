

function setVoyagerPage() {
    $('.pageBtns').velocity("transition.slideUpIn");
  };

$(document).ready(function() {
    window.setTimeout(setVoyagerPage, 1000);

  // $("#missionBtn").on('click', function(){
  //   $("#missionText").toggle();
  // });

  $('#missionBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#missionText').velocity("transition.slideRightBigIn");
        $("#missionBtn").css('background-image', 'url(/images/buttons/lunarlander/MissionH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
        scene.children[i].scale.x = 9;
        scene.children[i].scale.y = 9;
        scene.children[i].scale.z = 9;
        }};
    }else{
        $('#missionText').velocity("transition.slideRightBigOut");
        $("#missionBtn").css('background-image', 'url(/images/buttons/lunarlander/MissionA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
        scene.children[i].scale.x = 8;
        scene.children[i].scale.y = 8;
        scene.children[i].scale.z = 8;
        }};
    };
    $(this).data('clicks', click+1);
  });

  $('#timelineBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
      console.log($(this).data);
        $('#timelineText').velocity("transition.slideRightBigIn");
        $("#timelineBtn").css('background-image', 'url(/images/buttons/voyager/timelineH.png)');
    }else{
        $('#timelineText').velocity("transition.slideRightBigOut");
        $("#timelineBtn").css('background-image', 'url(/images/buttons/voyager/timelineA.png)');
    };
    $(this).data('clicks',click+1);
  });

  $('#soundsBtn').on('click', function() {
    var click = +$(this).data('clicks') || 0;
    if (click % 2 == 1) {
        $('#sounds').velocity("transition.slideRightBigIn");
        $("#soundsBtn").css('background-image', 'url(/images/buttons/voyager/soundsH.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
        scene.children[i].material.visible = false;
        }};

    }else{
        $('#sounds').velocity("transition.slideRightBigOut");
        $("#soundsBtn").css('background-image', 'url(/images/buttons/voyager/soundsA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
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
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
        scene.children[i].material.visible = false;
        }};
    }else{
        $('#video').velocity("transition.slideRightBigOut");
        $("#videoBtn").css('background-image', 'url(/images/buttons/videoA.png)');
        for (var i = 2; i < 103; i++) {
        if (scene.children[i].name == "voyager") {
        scene.children[i].material.visible = true;
        }};
    };
    $(this).data('clicks',click+1);
  });


});
