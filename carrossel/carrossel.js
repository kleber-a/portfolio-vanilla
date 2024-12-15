const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',

    coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        scale: 1
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });

  swiper.autoplay.stop();
  swiper.update();

// swiper.el.addEventListener('mouseenter', () => {
//     swiper.autoplay.stop();
//     swiper.update();
//   });
  
//   swiper.el.addEventListener('mouseleave', () => {
//     swiper.autoplay.start();
//     swiper.update();
//   });

