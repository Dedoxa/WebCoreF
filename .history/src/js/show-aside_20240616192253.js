const BURGER_ICON = document.querySelector('#burger')
const BURGER_CROSS_ICON = document.querySelector('#burger-cross')
const BURGER_MENU = document.querySelector('#burger-menu')

function showAsideMenu(ton, toff, container) {
  ton.addEventListener('click', function () {
    if (!container.classList.contains('jsShow-aside')) {
      container.classList.add('jsShow-aside')
    }
  })

  toff.addEventListener('click', function () {
    if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
    }
  })
}

showAsideMenu(BURGER_ICON, BURGER_MENU)
