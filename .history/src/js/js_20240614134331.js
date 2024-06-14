import { Navigation, Pagination } from 'swiper/modules'
Swiper.use([Navigation, Pagination])
import Swiper from 'swiper'

if (window.innerWidth <= 320) {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    }
  })
}

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
