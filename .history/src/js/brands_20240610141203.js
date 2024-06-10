import Swiper from 'swiper'

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination'
  }
})

const BRANDS_CONTAINER = document.querySelector('.window__brands')
const TOGGLER_AREA = document.querySelector('.toggler-showHide')
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
expandContainer(ARROW)

console.log('Брэнды подключились')
