const quesos = document.querySelector('.queso');
const menu = document.querySelector('.menu-navegacion');

quesos.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != quesos ){
        menu.classList.toggle("spread")
    }
})