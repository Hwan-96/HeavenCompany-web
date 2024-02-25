document.addEventListener("DOMContentLoaded", function() {
  const swiper1 = new Swiper(".Swiper1", {
    effect : 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });

  const swiper2 = new Swiper(".Swiper2", {
    breakpoints: {
      280: {
        slidesPerView : 1,
        slidesPerGroup : 1,
        spaceBetween : 30,
      },
      768: {
        slidesPerView : 2,
        slidesPerGroup : 2,
        spaceBetween : 30,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop:true,
  });

  const swiper3 = new Swiper(".Swiper3", {
    direction: "vertical",
    breakpoints: {
      280: {
        slidesPerView : 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView : 5,
        slidesPerGroup: 1,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
  });

  const swiper4 = new Swiper(".Swiper4", {
    breakpoints: {
      280: {
        slidesPerView : 1,
      },
      768: {
        slidesPerView : 2,
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });
});