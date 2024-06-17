const BUTTONS_COLLECTION = document.querySelectorAll('.presentation__button')
const PRESENTATION_CLASS = 'presentation__button--active'

const LINKS_COLLECTION = document.querySelectorAll('.presentation__button')

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
