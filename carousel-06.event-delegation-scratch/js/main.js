const carousel = document.querySelector('.carousel')
const arrowButtons = carousel.querySelectorAll('.nav')
const trackContainer = carousel.querySelector('.track__container')
const track = trackContainer.querySelector('.track')
const slideWidth = trackContainer.querySelector('.slide').getBoundingClientRect().width
const dots = carousel.querySelectorAll('.dot')

arrowButtons.forEach(arrow => {
  arrow.addEventListener('click', function(e) {
    trackPosition = parseInt(track.style.left || 0)
    if (e.target.dataset.direction === 'right') {
      const lastSlidePosition = -(slideWidth * (track.children.length - 2))
      if (trackPosition === lastSlidePosition) {
        hideRightArrow()
      } 
      showLeftArrow()
      track.style.left = `${(trackPosition - slideWidth)}px`
    } else {
      const firstSlidePosition = 0
      if (trackPosition === firstSlidePosition - slideWidth) {
        hideLeftArrow(e.target)
      }
      showRightArrow()
      track.style.left = `${(trackPosition + slideWidth)}px`
    }

    const index = Math.abs(parseInt(track.style.left)) / slideWidth
    updateDotAtIndex(index)

  })
})

function updateDotAtIndex(selectedDotIndex) {
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
