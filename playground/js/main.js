// Remove event listeners
const button = document.querySelector('button')


const sayHello = (e) => {
  console.log('hello')
  const prevCount = parseInt(e.target.dataset.count) || 0
  const currentCount = prevCount + 1

  e.target.dataset.count = currentCount

  if (currentCount === 5) {
    console.log('Removed event listener')
    e.target.removeEventListener('click', sayHello)
  }
}
const sayTashiDelek = _ => 'tashi delek'

button.addEventListener('click', sayHello)
button.addEventListener('click', sayTashiDelek)

