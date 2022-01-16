const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordion__item')


accordion.addEventListener('click', function(e) {
  const eventTarget = e.target
  if (eventTarget.matches('button') && eventTarget.closest('.accordion__header')) {
    const accordionHeader = eventTarget.closest('.accordion__header')
    const accordionContent = accordionHeader.nextElementSibling 
    const accordionInner = accordionContent.querySelector('.accordion__inner')
    
    if (accordionContent.classList.contains('is-hidden')) {
      const contentHeight = accordionInner.getBoundingClientRect().height
      accordionContent.style.height = `${contentHeight}px`
    } else {
      accordionContent.style.height = '0px'
    }
    accordionContent.classList.toggle('is-hidden')
  }
})
