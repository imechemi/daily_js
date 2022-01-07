const openModalButton = document.querySelector('.jsModalOpen')
const modalOverlayContainer = document.querySelector('.overlay')
const closeModalButton = document.querySelector('.jsModalClose')

openModalButton.addEventListener('click', function() {
  modalOverlayContainer.classList.remove('hidden')
})

closeModalButton.addEventListener('click', function() {
  modalOverlayContainer.classList.add('hidden')
})

modalOverlayContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('overlay')) {
    modalOverlayContainer.classList.add('hidden')
  }
})