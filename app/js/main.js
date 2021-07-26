$(function () {

  $(".filter-top__btn").on("click", function() {
    $(".filter-top__btn").removeClass("filter-top__btn--active");
    $(this).addClass("filter-top__btn--active");

    if($(this).hasClass("filter-top__btn--row")) {
      $(".catalogue-content__products").addClass("catalogue-content__products--active");
    } else {
      $(".catalogue-content__products").removeClass("catalogue-content__products--active");
    }
  });

  $('.catalogue__btn').on("click", function() {
    $("body").toggleClass("lock");
    $(".catalogue__filters").slideToggle();
  });

  $('.blog-content__btn').on('click', function() {
    $('.filter').toggleClass('filter--active');
  });

  $('.blog-details__btn').on('click', function() {
    $('.filter').toggleClass('filter--active');
  });

  $('.product-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

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

  $(".filter-top__select, .product-details__input").styler();

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  });

  $('.related-products__slider').slick({
    prevArrow: '<button class="related-products__btn related-products__btn--left"><span class="sr-only">Move to previous slide</span><svg class="related-products__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="9px"> <path d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z"/></svg></button>',
    nextArrow: '<button class="related-products__btn related-products__btn--right"><span class="sr-only">Move to next slide</span><svg class="related-products__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="9px"> <path d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 22.000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z"/></svg></button>',
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      },
    ]
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
  });

  $(".product-details__big").slick({
    asNavFor: '.product-details__small',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $(".product-details__small").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    dots: false,
    asNavFor: '.product-details__big',
    focusOnSelect: true
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

  $(".filter-recent__rating").rateYo({
    starWidth: "10px",
    readOnly: true,
    spacing: "8px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });

  $(".product-details__stars").rateYo({
    starWidth: "20px",
    readOnly: true,
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });

  $(".product-card__rating").rateYo({
    starWidth: "20px",
    readOnly: true,
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  })

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
