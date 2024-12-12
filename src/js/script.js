const { Thumbs } = require("swiper/modules");

const swiperTwo = new Swiper('.swiper_2', {
	slidesPerView: 5,
});

const swiperOne = new Swiper('.swiper_1', {
	thumbs: {
		swiper: swiperTwo,
	},
});


