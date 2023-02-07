$(document).ready(function () {
  $('.your-class').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });
});

$(document).ready(function () {
  $('.partners-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    centerMode: true,
    speed: 500,
    infinite: true,
    cssEase: 'linear',

  });
});