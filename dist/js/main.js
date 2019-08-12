$(function() {
  $(".slider__inner").slick({
    arrows: false
  });

  $('a[href*="#"]').smoothscroll({
    duration: 1200,
    offset: 0
  });
});
