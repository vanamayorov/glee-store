$(function () {
  var containerEl1 = $('[data-ref="mix-1"]');
  var containerEl2 = $('[data-ref="mix-2"]');


  var mixer1 = mixitup(containerEl1, {
    controls: {
      scope: "local",
    },
  });
  var mixer2 = mixitup(containerEl2, {
    controls: {
      scope: "local",
    },
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  });

  $(".partners-slider__list").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    // autoplay: true,
  });

  $(".video-link").fancybox();
});
