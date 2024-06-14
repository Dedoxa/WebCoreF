import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])
import Swiper from 'swiper'

const swiper = new Swiper('.swiper', {
  grid: {
    fill: row,
    rows: 1
  },

  pagination: {
    el: '.swiper-pagination'
  },

  breakpoints: {
    320: {
      enabled: true,
      loop: true,
      spaceBetween: 16
    },
    768: {
      enabled: false,
      loop: false,
      slidesPerView: 10,
      spaceBetween: 24
    },
    1120: {
      enabled: false,
      loop: false,
      spaceBetween: 32
    }
  }
})

const BRANDS_CONTAINER = document.querySelector('.plates__brands-swiper')
const TOGGLER = document.querySelector('.plates__toggler')

function expandContainer(element) {
  element.addEventListener('click', function () {
    if (TOGGLER.textContent === 'Показать всё') {
      BRANDS_CONTAINER.classList.add('jsExpand')
      TOGGLER.textContent = 'Скрыть'
    } else if (TOGGLER.textContent === 'Скрыть') {
      BRANDS_CONTAINER.classList.remove('jsExpand')
      TOGGLER.textContent = 'Показать всё'
    }
  })
}

expandContainer(TOGGLER)
