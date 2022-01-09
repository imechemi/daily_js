const tabMenu = document.querySelector('.tab__menu')
const tabContents = document.querySelector('.tab__contents')

tabMenu.addEventListener('click', function(e) {
  if (e.target.closest('.tab__menu')) {
    const selectedTabId = e.target.getAttribute('id')
    Array.from(tabMenu.children).forEach(tabButton => {
      tabButton.classList.remove('active')
    })

    Array.from(tabContents.children).forEach(tabContent => {
      tabContent.classList.remove('active')
    })

    e.target.classList.add('active')
    const selectedTabContent = tabContents.querySelector(`#${selectedTabId}`)
    selectedTabContent.classList.add('active')
  }
})