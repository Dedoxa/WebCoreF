const PRESENTATION_TEXT = document.querySelector('.presentation__text')
const PRESENTATION_TOGGLER = document.querySelector('.presentation__toggler')

function expandContainer(container) {
  element.addEventListener('click', function () {
    if (container.classList.contains) {
      container.classList.add('jsShow-aside')
    } else if (element.textContent === 'Скрыть') {
      container.classList.remove('jsShow-aside')
    }
  })
}

// expandContainer(PRESENTATION_TOGGLER, PRESENTATION_TEXT, 'Читать далее')
