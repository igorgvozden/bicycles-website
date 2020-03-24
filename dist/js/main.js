// menu button toggle

var menuList = document.querySelector('.nav');

function toggleMenu() {
    menuList.classList.toggle('visible');
}





// accordion collapse

var items = document.querySelectorAll('.main-left__accordion-item');
var accordionTitle = document.querySelectorAll('.accordion-item__title-cross--flat');
var accordionCrossLine = document.querySelectorAll('.accordion-item__title-cross--up');

for (line of accordionCrossLine) {
    line.style.visibility = 'hidden';
}

function collapse() {
    if (this.parentNode.children[1].style.visibility == 'visible') {
        this.parentNode.children[1].style.visibility = 'hidden';
        this.parentNode.parentNode.children[1].style.visibility = 'visible';
        this.parentNode.parentNode.children[1].style.height = 'initial';
    } else {
        this.parentNode.children[1].style.visibility = 'visible';
        this.parentNode.parentNode.children[1].style.visibility = 'hidden';
        this.parentNode.parentNode.children[1].style.height = '0px';
    }
}

accordionTitle.forEach(el => el.addEventListener('click', collapse));