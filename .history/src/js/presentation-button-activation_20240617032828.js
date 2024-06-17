function showAsideMenu(ton, toff, mainAside, blur, ...otherAsides) {
  for (let element of ton) {
    element.addEventListener('click', function () {
      if (!mainAside.classList.contains('jsShow-aside')) {
        mainAside.classList.add('jsShow-aside')
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

  toff.addEventListener('click', function () {
    if (mainAside.classList.contains('jsShow-aside')) {
      mainAside.classList.remove('jsShow-aside')
      blur.classList.remove('jsShow-blur')
    }
  })
  blur.addEventListener('click', function () {
    if (mainAside.classList.contains('jsShow-aside')) {
      mainAside.classList.remove('jsShow-aside')
      blur.classList.remove('jsShow-blur')
    }
  })
}

showAsideMenu()
