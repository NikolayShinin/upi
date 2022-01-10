import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

let aboutSlider = new Swiper('.about__list', {
    slidesPerView: "auto",
    autoHeight: true,
    navigation: {
        nextEl: ".about__arrow--next",
        prevEl: ".about__arrow--prev",
    },
    breakpoints: {
        576: {
            autoHeight: false
        }
    }
})

let newsSlider = new Swiper('.news__list', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".news__arrow--next",
        prevEl: ".news__arrow--prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
})

let reviewSlider = new Swiper('.review__list', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".review__arrow--next",
        prevEl: ".review__arrow--prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        }
    }
})

let technicSlider = new Swiper('.technic__list', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".technic__arrow--next",
        prevEl: ".technic__arrow--prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
})

let mapSlider = new Swiper('.map-slider__body', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".map-slider__arrow-next",
        prevEl: ".map-slider__arrow-prev",
    },
    pagination: {
        el: '.map-slider-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            const path = document.querySelectorAll('.map-slider-pagination a')[index]
            path.classList.add(className)
            return path.outerHTML
        }
    }
})

window.mapSliderPagination = mapSlider.pagination.$el[0].childNodes;