const BLUR = document.querySelector('.blur')

const BURGER_ICON = document.querySelector('#burger')
const BURGER_CROSS_ICON = document.querySelector('#burger-cross')
const BURGER_MENU = document.querySelector('#burger-menu')

const FEEDBACK_ICON = document.querySelector('#chat')
const FEEDBACK_CROSS_ICON = document.querySelector('#feedback-cross')
const FEEDBACK_MENU = document.querySelector('#feedback-menu')

const CALL_ICON = document.querySelector('#call')
const CALL_CROSS_ICON = document.querySelector('#call-menu')
const CALL_MENU = document.querySelector('#call-menu')

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
  console.log('aaaaaaaaaaaaaaaa')
}

showAsideMenu(BURGER_ICON, BURGER_CROSS_ICON, BURGER_MENU)
showAsideMenu(FEEDBACK_ICON, FEEDBACK_CROSS_ICON, FEEDBACK_MENU)
showAsideMenu(CALL_ICON, CALL_CROSS_ICON, CALL_MENU)
