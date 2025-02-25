var menu = document.getElementById('btn-mobile');

menu.addEventListener('click', menuMobile);

function menuMobile(){
    var nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

var liMenu = document.getElementsByClassName('link-menu');

var count = 0

while(count <= liMenu.length){
    liMenu[count].addEventListener('click', menuMobileRemove)
    count ++
}

function menuMobileRemove(){
    var nav = document.getElementById('nav-menu');
    nav.classList.remove('active')
}