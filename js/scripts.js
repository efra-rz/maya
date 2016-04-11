$(function(){
  //NIVO-SLIDER
  $(window).load(function() {
    $('#slider').nivoSlider({
      controlNav: false,
    });
  });
  //GOOGLE-MAPS
  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });
});
