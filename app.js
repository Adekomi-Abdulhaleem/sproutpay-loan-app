var navBar = document.querySelector('header .nav-bar')
var navBtn = document.querySelector('header .mobile i')

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('active')
})