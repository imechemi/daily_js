// Start writing JavaScript here!
const menuButton = document.querySelector('button')

menuButton.addEventListener('click', function() {
  document.body.classList.toggle('is-menu-open')
})