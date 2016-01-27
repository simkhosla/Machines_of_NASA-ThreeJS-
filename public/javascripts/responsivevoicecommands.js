$(document).ready(function() {
  $('a').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags
    responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
    responsiveVoice.speak($(this).text()); // Speak the text contents of all nodes within the current 'a' tag
  });
});
