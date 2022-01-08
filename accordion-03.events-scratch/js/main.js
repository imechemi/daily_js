const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordion__item')

accordionItems.forEach(accordionItem => {
  const header = accordionItem.querySelector('.accordion__header')
  const button = header.querySelector('button')

  button.addEventListener('click', function() {
    const accordionContent = accordionItem.querySelector('.accordion__content')
    accordionContent.classList.toggle('is-hidden')
  })
})