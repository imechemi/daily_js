const carousel = document.querySelector('.carousel')
const slides = carousel.querySelector('.slides')
const slideListItems = slides.querySelectorAll('li')
const slideWidth = slideListItems[0].getBoundingClientRect().width

slideListItems.forEach((listItem, index) => {
  listItem.style.left = index * slideWidth + 'px'
})

const leftArrow = carousel.querySelector('.left')
const rightArrow = carousel.querySelector('.right')

const slideTrack = slides.querySelector('.slide_track')
slideTrack.style.left = '0px'

const dotsContainer = carousel.querySelector('.carousel__dots')
const dots = dotsContainer.querySelectorAll('button')

leftArrow.addEventListener('click', function() {
  const leftPos = parseInt(slideTrack.style.left.replace('px', ''))
  if (leftPos === 0) {
    leftArrow.classList.add('hidden')
  } else {
    slideTrack.style.left = leftPos + slideWidth + 'px'
  }
})

rightArrow.addEventListener('click', function() {
  let leftPos = parseInt(slideTrack.style.left.replace('px', ''))
  console.log(leftPos)
  if (-leftPos === slideWidth * (slideListItems.length - 2)) {
    console.log(rightArrow)
    rightArrow.classList.add('hidden')
  } else {
    slideTrack.style.left = leftPos - slideWidth + 'px'
  }
  leftArrow.classList.remove('hidden')
  const currentActiveDot = dotsContainer.querySelector('.active')
  const nextDot = currentActiveDot.parentElement.nextElementSibling.firstChild
  dots.forEach((dot) => dot.classList.remove('active'))
  nextDot.classList.add('active')
})

dots.forEach((dot, index) => {
  dot.addEventListener('click', function() {
    slideTrack.style.left = `-${index * slideWidth}px`
    dots.forEach((dot) => dot.classList.remove('active'))
    dot.classList.add('active')
  })
})
