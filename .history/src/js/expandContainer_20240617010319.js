const PRESENTATION_TEXT = document.querySelector('.presentation__description')
const PRESENTATION_TOGGLER = document.querySelector('.presentation__toggler')

const PLATES_CONTAINER = document.querySelector('#plate-options')
const PLATES_TOGGLER = document.querySelector('#plates-toggler')

const DEVICES_CONTAINER = document.querySelector('#device-options')
const DEVICES_TOGGLER = document.querySelector('#devices-toggler')

function expandContainer(element, container, default_text = 'Показать всё') {
  element.addEventListener('click', function () {
    if (element.textContent !== 'Скрыть') {
      container.classList.add('jsExpand')
      element.classList.add('jsRotateUD')
      element.textContent = 'Скрыть'
    } else if (element.textContent === 'Скрыть') {
      container.classList.remove('jsExpand')
      element.classList.remove('jsRotateUD')
      element.textContent = default_text
    }
  })
}

expandContainer(PRESENTATION_TOGGLER, PRESENTATION_TEXT, 'Читать далее')
expandContainer(PLATES_TOGGLER, PLATES_CONTAINER)
expandContainer(DEVICES_TOGGLER, DEVICES_CONTAINER)
