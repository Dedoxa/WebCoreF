import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])
import Swiper from 'swiper'

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },

  breakpoints: {
    320: {
      enabled: true,
      loop: true,
      spaceBetween: 16
    },
    768: {
      enabled: false
    },
    1120: {
      enabled: false
    }
  }
})
