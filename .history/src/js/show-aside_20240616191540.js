const BURGER_ICON = document.querySelector('#burger')
const BURGER_MENU = document.querySelector('#burger-menu')

function showAsideMenu(element, container) {
  element.addEventListener('click', function () {
    if (!container.classList.contains('jsShow-aside')) {
      container.classList.add('jsShow-aside')
      console.log('AAAAAAAAAAAAAAAAA')
    } else if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
      console.log('BBBBBBBBBBBBBBBB')
    }
  })
}

showAsideMenu(BURGER_ICON, BURGER_MENU)
