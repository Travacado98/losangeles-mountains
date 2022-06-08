$(function() {
  $("#tabs").tabs();
  $("#accordion").accordion();

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $("header").addClass("scrolling");
    } else {
      $("header").removeClass("scrolling");
    }
  });
});