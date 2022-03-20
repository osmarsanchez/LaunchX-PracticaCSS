const menuIcon = document.getElementById('menu__icon')
const menu = document.getElementById('menu')
const collapses = document.querySelectorAll('.collapse__header')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active')
})

collapses.forEach(collapse => {
  collapse.addEventListener('click', () => {
    const parent = collapse.parentElement
    parent.classList.toggle('collapse--shadow')
    const icon = collapse.querySelector('.fa-sort-down')
    icon.classList.toggle('fa-sort-up')
    const content = collapse.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})
