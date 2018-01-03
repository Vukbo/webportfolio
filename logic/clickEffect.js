var isReady = true;
var counter = 0;
$(document).bind("click touchstart",function(e){
  counter++;
  if(isReady){
    $('body').append('<div class="circleEffect" id="circleEffect'+counter+'"></div>')
    $('#circleEffect'+counter).css({
      'left': e.pageX + 'px',
      'top': e.pageY + 'px'
    })
    $('#circleEffect'+counter).animate({
      width: '70px',
      height: '70px',
      borderWidth: '0px',
      opacity: '0.3'

    },800, "swing", function(){
      $(this).remove();
    });

  }

});
