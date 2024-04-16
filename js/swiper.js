export const swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 10,
      slidesPerView: 2,
    },

    1024: {
      spaceBetween: 20,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export const swiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1024: {
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

export const swiperThree = new Swiper(".mySwiperThree", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1024: {
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
  },
  navigation: {
    nextEl: ".rebate__swiper-btn-next",
    prevEl: ".swiper-button-prev",
  },
});