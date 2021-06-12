
const menuItems = document.querySelectorAll('.menuLink');
const menuItem = document.querySelector('.menuLink');

function animMenu(e){
    console.log(menuItem);
this.classList.add('menuHover');
};

function exitMenu(e){
    console.log(e);
this.classList.remove('menuHover');
}


menuItems.forEach(menuItem => menuItem.addEventListener("mouseenter", animMenu));
menuItems.forEach(menuItem => menuItem.addEventListener("mouseleave", exitMenu));


