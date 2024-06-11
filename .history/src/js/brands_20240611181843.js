import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])
import Swiper from 'swiper'

const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      enabled: true,
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16
    },
    768: {
      enabled: true,
      direction: 'horizontal',
      loop: false,
      spaceBetween: 24
    },
    1120: {
      enabled: true,
      direction: 'horizontal',
      loop: false,
      spaceBetween: 32
    }
  },

  pagination: {
    el: '.swiper-pagination'
  }
})

const BRANDS_CONTAINER = document.querySelector('.window__brands')
const TOGGLER = document.querySelector('.toggler-showHide')

function expandContainer(element) {
  element.addEventListener('click', function () {
    if (TOGGLER.textContent === 'Показать всё') {
      BRANDS_CONTAINER.classList.add('js__expand')

      TOGGLER.textContent = 'Скрыть'
    } else if (TOGGLER.textContent === 'Скрыть') {
      BRANDS_CONTAINER.classList.remove('js__expand')

      TOGGLER.textContent = 'Показать всё'
    }
  })
}

expandContainer(TOGGLER)

console.log('Брэнды подключились')
