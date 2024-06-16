const BLUR = document.querySelector('.blur')

const BURGER_ICON = document.querySelector('#burger')
const BURGER_CROSS_ICON = document.querySelector('#burger-cross')
const BURGER_MENU = document.querySelector('#burger-menu')

function showAsideMenu(ton, toff, container) {
  ton.addEventListener('click', function () {
    if (!container.classList.contains('jsShow-aside')) {
      container.classList.add('jsShow-aside')
      BLUR.classList.add('jsShow-blur')
    }
  })

  toff.addEventListener('click', function () {
    if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
      BLUR.classList.remove('jsShow-blur')
    }
  })

  BLUR.addEventListener('click', function () {
    if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
      BLUR.classList.remove('jsShow-blur')
    }
  })
}

showAsideMenu(BURGER_ICON, BURGER_CROSS_ICON, BURGER_MENU)
