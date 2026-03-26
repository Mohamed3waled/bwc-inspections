let btn_menu = document.querySelector(".btn_menu")
let close_menu = document.querySelector(".btn_close")
let nav = document.querySelector('nav')



// open menu 
btn_menu.addEventListener('click', () => {
    var Over = document.createElement('Div')
    Over.className='overlay'
    document.querySelector('header .container').appendChild(Over)
    nav.style.right = '0'
    document.body.style.overflow = "hidden"
})

// close menu
close_menu.addEventListener('click', (e) => {
    var overlay = document.querySelector(".overlay")
    nav.style.right = '-500px'
    document.body.style.overflowY = "scroll"
    setTimeout(() => {
        overlay.remove()
    }, 100)
})