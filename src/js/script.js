

const swiperTwo = new Swiper('.swiper_2', {
	slidesPerView: 5,
  spaceBetween: 10,
});

const swiperOne = new Swiper('.swiper_1', {
	initialSlide: 2,
	thumbs: {
		swiper: swiperTwo,
	},
});

const swiperThree = new Swiper('.swiper_3', {
	slidesPerView: 5,
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
});

const menuButton = document.querySelector('.menu__button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('active');
  nav.classList.toggle('active');
});