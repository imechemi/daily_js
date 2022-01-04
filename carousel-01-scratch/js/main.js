const carousel = document.querySelector('.carousel')
const slides = carousel.querySelector('.slides')
const slideListItems = slides.querySelectorAll('li')
const slideWidth = slideListItems[0].getBoundingClientRect().width


console.log(`Slide width: ${slideWidth}`)
slideListItems.forEach((listItem, index) => {
  console.log(listItem)
  console.log(`Setting left: ${index * slideWidth}`)
  listItem.style.left = index * slideWidth + 'px'
})

const leftArrow = carousel.querySelector('.left')
const rightArrow = carousel.querySelector('.right')

const slideTrack = slides.querySelector('.slide_track')
slideTrack.style.left = '0px'

leftArrow.addEventListener('click', function() {
  const leftPos = parseInt(slideTrack.style.left.replace('px', ''))
  if (leftPos === 0) {
    slideTrack.style.left = `-${((slideListItems.length - 1) * slideWidth)}px`
  } else {
    slideTrack.style.left = leftPos + slideWidth + 'px'
  }
})

rightArrow.addEventListener('click', function() {
  let leftPos = parseInt(slideTrack.style.left.replace('px', ''))
  if (-leftPos === slideWidth * (slideListItems.length - 1)) {
    slideTrack.style.left = '0px'
  } else {
    slideTrack.style.left = leftPos - slideWidth + 'px'
  }
})
