$(document).ready(function(){  
  $("#tweet-text").on('input', function(){
      let countLength = $(this).val().length;
      let output = 140;
      let remainingChars = output - countLength;
      //this line is not doing anyhing, but can save it to a variable and reuse on lines 9 and 11
      // $(this).parent().children('div').children('output').text(remainingChars);
      if (remainingChars < 0) {
        $(this).parent().children('div').children('output').text(remainingChars).removeClass("output").addClass("negativeCount");
      } else {
        $(this).parent().children('div').children('output').text(remainingChars).removeClass("negativeCount").addClass("output");
      }
  });
});