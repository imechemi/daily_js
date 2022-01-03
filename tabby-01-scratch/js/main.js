
const tabMenu = document.querySelector('.tab__menu')
const tabMenuItems = Array.from(tabMenu.children[0].children)

const tabPages = document.querySelectorAll('.tab__content')

tabMenuItems.forEach((menuItem, index, tabMenuItemArr) => {
  
  menuItem.addEventListener('click', function() {

      tabMenuItemArr.forEach((iter, iter_index) => {
        iter.classList.remove('active')
        tabPages[iter_index].classList.remove('active')
      })

      menuItem.classList.add('active')
      tabPages[index].classList.add('active')
  })
})
