const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordion__item')


accordion.addEventListener('click', function(e) {
  const eventTarget = e.target
  if (eventTarget.matches('button') && eventTarget.closest('.accordion__header')) {
    const accordionHeader = eventTarget.closest('.accordion__header')
    const accordionContent = accordionHeader.nextElementSibling 
    accordionContent.classList.toggle('is-hidden')
  }
})
