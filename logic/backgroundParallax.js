//New calculated position of the image
var newX;
var newY;
//max x and y of the screen
var maxX;
var maxY;
//First X and Y position of Courser
var firstX;
var firstY;
//Checks if the Courser was moved
var firstMove = false;

var xSpeed = 0.007 ;
var ySpeed = 0.008 ;

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

if(!isMobile)
$(document).on("mousemove", function(e){
  maxX = $(document).width();
  maxY = $(document).height();

  newX = ((maxX / 2) - e.pageX) * xSpeed + maxX/2;
  newY = ((maxY / 2) - e.pageY) * ySpeed + maxY/2;

  $('.backgroundImage').css({
    'left':newX,
    'top':newY
  })

});
