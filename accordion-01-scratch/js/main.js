
const accordionItems = document.querySelectorAll('.accordion-item')

console.log(accordionItems)
accordionItems.forEach((accordionItem, index, currentArray) => {
  accordionItem.addEventListener('click', () => {
    console.log('click')
    accordionItem.classList.toggle('is-open')
  })
})