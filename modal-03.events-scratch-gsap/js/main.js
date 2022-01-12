const openModalButton = document.querySelector('.jsModalOpen')
const modalOverlayContainer = document.querySelector('.overlay')
const closeModalButton = document.querySelector('.jsModalClose')
const hand = document.querySelector('.wave-hand')

openModalButton.addEventListener('click', function() {
  modalOverlayContainer.classList.remove('hidden')
  wave()
})

closeModalButton.addEventListener('click', function() {
  modalOverlayContainer.classList.add('hidden')
})

modalOverlayContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('overlay')) {
    modalOverlayContainer.classList.add('hidden')
  }
})

function wave() {
  const tl = new TimelineMax({})
  tl.set(hand, {transformOrigin: 'bottom center'})
  tl.from(hand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })
  tl.to(hand, 0.2, {rotate: 15})
  tl.to(hand, 0.2, {rotate: -15})
  tl.to(hand, 0.2, {rotate: 15})
  tl.to(hand, 0.2, {rotate: -15})
  tl.to(hand, 0.2, {rotate: 0})
}
