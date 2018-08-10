// import '../vendor/slick-1.8.1/slick/slick.min';

$('.slider .slider__slides').slick({
  // Your Slick Carousel settings go here
});

$('.btn-menu').on('click', function(event) {
  event.preventDefault();

  $('.header .header__inner').toggleClass('active');
  $(this).toggleClass('active');
});
