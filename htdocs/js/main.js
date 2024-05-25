'use strict'

$("document").ready(function() {
	console.log('hello world');
});


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	autoHeight: true,
    effect: 'coverflow',
	loop: true,
	// pagination: {
	// 	el: '.product-swiper__pagination',
	// },
	breakpoints: {
	  768: {
		slidesPerView: 1,
        slidesPerGroup: 1,
		autoHeight: false,
		effect: 'slide'
	  },
	  1180: {
		slidesPerView: 5,
		autoHeight: false,
		effect: 'slide'
	  }
	}
});