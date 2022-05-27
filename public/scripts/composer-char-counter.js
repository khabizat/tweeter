$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    let countLength = $(this).val().length;
    let output = 140;
    let remainingChars = output - countLength;
    if (remainingChars < 0) {
      $(this).parent().children('div').children('output').text(remainingChars).removeClass("output").addClass("negativeCount");
    } else {
      $(this).parent().children('div').children('output').text(remainingChars).removeClass("negativeCount").addClass("output");
    }
  });
});