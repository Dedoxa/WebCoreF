const BURGER_ICON = document.querySelector('#burger')
const BURGER_MENU = document.querySelector('#burger-menu')

function showAsideMenu(element, container) {
  element.addEventListener('click', function () {
    console.log('AAAAAAAAAAAAAAAAA')
    if (!container.classList.contains('jsShow-aside')) {
      container.classList.add('jsShow-aside')
    } else if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
    }
  })
}

showAsideMenu(BURGER_ICON, BURGER_MENU)
