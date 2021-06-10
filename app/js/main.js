$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  });

  $(".video-link").fancybox();

  var mixer1 = mixitup(".products-week__items");
  var mixer2 = mixitup(".new-design__items");
});
