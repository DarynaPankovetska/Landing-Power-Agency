

const swiperTwo = new Swiper('.swiper_2', {
	slidesPerView: 5,
});

const swiperOne = new Swiper('.swiper_1', {
	thumbs: {
		swiper: swiperTwo,
	},
});

const swiperThree = new Swiper('.swiper_3', {
	slidesPerView: 5,
	autoplay: {
		delay: 3000,
	},
});
