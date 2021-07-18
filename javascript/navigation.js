const nav = document.getElementById('nav')

const bkg = document.createElement('div')
const ctn = document.createElement('div')
const row = document.createElement('div')
const navi = document.createElement('nav')

const logoImgA = document.createElement('a')
const logoImg = document.createElement('img')
const btn = document.createElement('button')
const span = document.createElement('span')

const navbar = document.createElement('div')
const navItems = document.createElement('ul')
const navItem1 = document.createElement('li')
const navItem1A = document.createElement('a')
const navItem2 = document.createElement('li')
const navItem2A = document.createElement('a')

navItem1A.innerHTML = 'Products'
navItem2A.innerHTML = 'Cart'

//styling



//classes

ctn.setAttribute('class', 'container')
row.setAttribute('class', 'row')
navi.setAttribute('class', 'col navbar navbar-expand-lg')

logoImgA.setAttribute('class', 'navbar-brand')
btn.setAttribute('class', 'navbar-toggler')
btn.setAttribute('type', 'button')
btn.setAttribute('data-toggle', 'collapse')
btn.setAttribute('data-target', '#navbarContent')
btn.setAttribute('aria-controls', 'navbarSupportedContent')
btn.setAttribute('aria-expanded', 'false')
btn.setAttribute('aria-label', 'Toggle navigation')
span.setAttribute('class', 'navbar-toggler-icon')

navbar.setAttribute('id', 'navbarContent')
navbar.setAttribute('class', 'collapse navbar-collapse')
navItems.setAttribute('class', 'navbar-nav')
navItem1.setAttribute('class', 'nav-item active')
navItem1A.setAttribute('class', 'nav-link')
navItem1A.setAttribute('href', 'index.html')
navItem2.setAttribute('class', 'nav-item')
navItem2A.setAttribute('class', 'nav-link')
navItem2A.setAttribute('href', 'cart.html')

logoImg.src = './images/logo.png'

//layering

nav.appendChild(bkg)
bkg.appendChild(ctn)
ctn.appendChild(row)
row.appendChild(navi)
navi.appendChild(logoImg)
navi.appendChild(btn)
btn.appendChild(span)
navi.appendChild(navbar)
navbar.appendChild(navItems)
navItems.appendChild(navItem1)
navItem1.appendChild(navItem1A)
navItems.appendChild(navItem2)
navItem2.appendChild(navItem2A)

console.log(nav);