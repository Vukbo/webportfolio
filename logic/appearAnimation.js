$(document).ready(function(e){
    $('.base').css({'opacity':0, 'top':'40%'});
    $('.backgroundImage').css({'opacity':0});

    $('.backgroundImage').delay(300).animate({
      opacity: 1
    },600,'swing', function(e){

    });
    $('.base').delay(700).animate({
      opacity:1,
      top:'50%'
    },800,function(){

    });
});
