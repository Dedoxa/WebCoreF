const BUTTONS_COLLECTION = document.querySelectorAll('.presentation__button')
const PRESENTATION_BUTTON_ACTIVE_CLASS = ''

function addActiveStyle(collection, activeClass) {
  for (let element of collection) {
    element.addEventListener('click', function () {
      if (!element.classList.contains(activeClass)) {
        element.classList.add(activeClass)
      }
    })
  }
}

addActiveStyle()
