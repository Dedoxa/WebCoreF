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
      loop: true
    },
    768: {
      enabled: false
    },
    1120: {
      enabled: false
    }
  }
})

const PRESENTATION_TEXT = document.querySelector('.presentation__text')
const PRESENTATION_TOGGLER = document.querySelector('.presentation__toggler')

const PLATES_CONTAINER = document.querySelector('#brand-options')
const PLATES_TOGGLER = document.querySelector('#brands-toggler')

const DEVICES_CONTAINER = document.querySelector('#device-options')
const DEVICES_TOGGLER = document.querySelector('#devices-toggler')

function expandContainer(element, container, default_text = 'Показать всё') {
  element.addEventListener('click', function () {
    if (element.textContent !== 'Скрыть') {
      container.classList.add('jsExpand')
      element.textContent = 'Скрыть'
    } else if (element.textContent === 'Скрыть') {
      container.classList.remove('jsExpand')
      element.textContent = default_text
    }
  })
}

expandContainer(PRESENTATION_TOGGLER, PRESENTATION_TEXT, 'Читать далее')
expandContainer(PLATES_TOGGLER, PLATES_CONTAINER)
expandContainer(DEVICES_TOGGLER, DEVICES_CONTAINER)
