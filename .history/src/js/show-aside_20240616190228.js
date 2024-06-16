const PRESENTATION_TEXT = document.querySelector('.presentation__text')
const PRESENTATION_TOGGLER = document.querySelector('.presentation__toggler')

function expandContainer(element, container, default_text = 'Показать всё') {
  element.addEventListener('click', function () {
    if (element.textContent !== 'Скрыть') {
      container.classList.add('jsExpand')
      element.textContent = 'Скрыть'
    } else if (element.textContent === 'Скрыть') {
      container.classList.remove('jsExpand')
      element.textContent = default_text
    }
  })
}

// expandContainer(PRESENTATION_TOGGLER, PRESENTATION_TEXT, 'Читать далее')
