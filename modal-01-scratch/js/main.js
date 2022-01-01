const openButton = document.querySelector('button.open')
const closeButton = document.querySelector('button.cross')
const modal = document.querySelector('.modal')

openButton.addEventListener('click', function() {
  document.body.classList.add('modal-open')
})

closeButton.addEventListener('click', function() {
  document.body.classList.remove('modal-open')
})

