const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordion__item')


accordion.addEventListener('click', function(e) {
  const eventTarget = e.target

  if (!eventTarget.closest('.accordion__header')) return;

  const accordionHeader = eventTarget.closest('.accordion__header')
  const accordionContent = accordionHeader.nextElementSibling 
  const accordionInner = accordionContent.querySelector('.accordion__inner')
  
  const height = accordionContent.classList.contains('is-hidden') ? accordionInner.getBoundingClientRect().height : 0
  accordionContent.style.height = `${height}px`
  accordionContent.classList.toggle('is-hidden')
})
