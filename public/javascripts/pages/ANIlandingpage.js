function showButton() {
  $('#enter').velocity("transition.slideUpIn");
}

$(document).ready(function() {
    window.setTimeout(showButton, 4000);
});
