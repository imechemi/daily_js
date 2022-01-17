const carousel = document.querySelector('.carousel')
const arrowButtons = carousel.querySelectorAll('.nav')
const trackContainer = carousel.querySelector('.track__container')
const track = trackContainer.querySelector('.track')
const slideWidth = trackContainer.querySelector('.slide').getBoundingClientRect().width
const carouselDotsWrapper = carousel.querySelector('.carousel__dots')
const dots = carousel.querySelectorAll('.dot')

const slides = Array.from(track.children)
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * slideWidth}px)`
})

carouselDotsWrapper.addEventListener('click', function(e) {
  if (e.target.classList.contains('dot',)) {
    dots.forEach((dot, index) => {
      dot.classList.remove('active')
      if (dot.isSameNode(e.target)) {
        activateSlide(index)
        dot.classList.add('active')
        return;
      }
    })
  }
})

function findActiveSlideIndex() {
  const dotBtns = carouselDotsWrapper.querySelectorAll('button')

  for (let i = 0; i < dotBtns.length; i++) {
    if (dotBtns[i].classList.contains('active')) { 
      console.log(`Returning index: ${i}`)
      return i
    }
  }
  return 0
}

arrowButtons.forEach(arrow => {
  arrow.addEventListener('click', function(e) {
    if (e.target.dataset.direction === 'right') {
      let currentSlidePosition = findActiveSlideIndex()
      let nextSlidePosition = currentSlidePosition + 1
      showLeftArrow()
      if (currentSlidePosition === slides.length - 2) {
        hideRightArrow()
      } 
      track.style.transform = `translateX(-${nextSlidePosition * slideWidth}px)`
      updateDotAtIndex(nextSlidePosition)
    } else {
      let currentSlidePosition = findActiveSlideIndex()
      nextSlidePosition = currentSlidePosition - 1
      if (currentSlidePosition === 1) {
        hideLeftArrow(e.target)
      }

      showRightArrow()
      console.log(`translateX(${nextSlidePosition * slideWidth}px)`)
      track.style.transform = `translateX(-${nextSlidePosition * slideWidth}px)`
      updateDotAtIndex(nextSlidePosition)
    }
  })
})

function updateDotAtIndex(selectedDotIndex) {
  console.log(`Updating dot index: ${selectedDotIndex}`)
  dots.forEach((dot, index) => {
    if (selectedDotIndex === index) {
      dot.classList.add('active')
    } else {
      dot.classList.remove('active')
    }
  })
}

function showLeftArrow() {
  carousel.querySelector("[data-direction='left']").classList.remove('hidden')
}

function hideLeftArrow() {
  carousel.querySelector("[data-direction='left']").classList.add('hidden')
}

function hideRightArrow() {
  carousel.querySelector("[data-direction='right']").classList.add('hidden')
}

function showRightArrow() {
  carousel.querySelector("[data-direction='right']").classList.remove('hidden')
}
