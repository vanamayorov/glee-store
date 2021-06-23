$(function () {
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onChange: function (data) {
      $(".filter-price__from").text("$" + data.from + ".00");
      $(".filter-price__to").text("$" + data.to + ".00");
    },
    onStart: function (data) {
      $(".filter-price__from").text("$" + data.from + ".00");
      $(".filter-price__to").text("$" + data.to + ".00");
    },
  });

  $(".filter-recent__rating").rateYo({
    starWidth: "10px",
    readOnly: true,
    spacing: "8px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplay: true,
  });

  $(".video-link").fancybox();

  function stickyNav() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 45) {
      $(".header").addClass("header--sticky");
    } else {
      $(".header").removeClass("header--sticky");
    }
  }

  $(window).scroll(function () {
    stickyNav();
  });

  $(".header__btn--angle").on("click", function () {
    $(this).toggleClass("header__btn--rotate");
    $(".user-nav").toggleClass("user-nav--active");
  });

  $(".header__btn--burger").on("click", function () {
    $(".menu-wrapper").addClass("menu-wrapper--active");
  });

  $(document).on("mouseup", function (e) {
    var menu = $(".menu");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $(".menu-wrapper").removeClass("menu-wrapper--active");
    }
  });

  $(".footer__subtitle").on("click", function () {
    $(this).find("svg").toggleClass("footer__svg--rotate");
    $(this)
      .siblings(".footer__list, .footer__text, .subscribe-form")
      .slideToggle();
  });

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
});
