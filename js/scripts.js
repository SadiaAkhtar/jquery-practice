// Check that the document is ready.
$(document).ready(function(){

  // Create a clcik handler for when the button is clicked
  $('.button').click(function(){

    // Loop though every element with class "circle"
    // If the element has class of "big-green", change it to "small-blue"
    //and if the element has class of "small-blue", change it to "big-green"
    $('.circle').each(function(){

      if ( $(this).hasClass("big-green") ){
        $(this).removeClass("big-green").addClass("small-blue");
      } else {
        $(this).removeClass('small-blue').addClass('big-green');
      }

    });

  });


});
