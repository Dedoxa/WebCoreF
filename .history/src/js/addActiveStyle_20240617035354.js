const BUTTONS_COLLECTION = document.querySelectorAll('.presentation__button')
const PRESENTATION_CLASS = 'presentation__button--active'

const LINKS_COLLECTION = document.querySelectorAll('.aside-menu__link')
const ASIDE_CLASS = 'aside-menu__link--active'

function addActiveStyle(collection, activeClass) {
  for (let element of collection) {
    element.classList.remove(activeClass)
    element.addEventListener('click', function () {
      if (!element.classList.contains(activeClass)) {
        element.classList.add(activeClass)
      }
    })
  }
}

addActiveStyle(BUTTONS_COLLECTION, PRESENTATION_CLASS)
addActiveStyle(LINKS_COLLECTION, ASIDE_CLASS)
