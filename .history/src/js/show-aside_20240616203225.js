const BLUR = document.querySelector('.blur')

const BURGER_ICON = document.querySelector('.burger')
const BURGER_CROSS_ICON = document.querySelector('.burger-cross')
const BURGER_MENU = document.querySelector('.burger-menu')

const FEEDBACK_ICON = document.querySelector('.chat')
const FEEDBACK_CROSS_ICON = document.querySelector('.feedback-cross')
const FEEDBACK_MENU = document.querySelector('.feedback-menu')

const CALL_ICON = document.querySelector('.call')
const CALL_CROSS_ICON = document.querySelector('.call-menu')
const CALL_MENU = document.querySelector('.call-menu')

function showAsideMenu(ton, toff, container, blur = BLUR) {
  ton.addEventListener('click', function () {
    console.log('aaaaaaaaaaaaaaaa')
    if (!container.classList.contains('jsShow-aside')) {
      container.classList.add('jsShow-aside')
      blur.classList.add('jsShow-blur')
    }
  })

  toff.addEventListener('click', function () {
    if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
      blur.classList.remove('jsShow-blur')
    }
  })
  blur.addEventListener('click', function () {
    if (container.classList.contains('jsShow-aside')) {
      container.classList.remove('jsShow-aside')
      blur.classList.remove('jsShow-blur')
    }
  })
}

showAsideMenu(BURGER_ICON, BURGER_CROSS_ICON, BURGER_MENU)
showAsideMenu(FEEDBACK_ICON, FEEDBACK_CROSS_ICON, FEEDBACK_MENU)
showAsideMenu(CALL_ICON, CALL_CROSS_ICON, CALL_MENU)
