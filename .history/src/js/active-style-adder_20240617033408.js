const BUTTONS_COLLECTION = document.querySelectorAll('.presentation__button')

function presButActivation(collection, blur, ...otherAsides) {
  for (let element of collection) {
    element.addEventListener('click', function () {
      if (!element.classList.contains('jsShow-aside')) {
        element.classList.add('jsShow-aside')
        blur.classList.add('jsShow-blur')
        asideIsOpened = true
      }

      for (let otherAside of otherAsides) {
        if (otherAside.classList.contains('jsShow-aside')) {
          otherAside.classList.remove('jsShow-aside')
        }
      }
    })
  }
}

presButActivation()
