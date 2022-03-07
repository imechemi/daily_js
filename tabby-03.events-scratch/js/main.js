const tabMenu = document.querySelector('.tab__menu')
const tabs = [...tabMenu.querySelectorAll('.tab')]
const tabContentsContainer = document.querySelector('.tab__contents')
const tabContents = [...tabContentsContainer.querySelectorAll('.tab__content')]

tabMenu.addEventListener('click', function(e) {
  if (e.target.closest('.tab__menu')) {
    tabs.forEach(tabButton => {
      tabButton.classList.remove('active')
    })

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })

    e.target.classList.add('active')
    const selectedTabId = e.target.getAttribute('id')
    const selectedTabContent = tabContentsContainer.querySelector(`#${selectedTabId}`)
    selectedTabContent.classList.add('active')
  }
})