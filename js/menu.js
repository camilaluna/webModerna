const men = document.querySelector('.mn');
const nav = document.querySelector('.menu-navegacion');

/* console.log(men)
console.log(nav) */

men.addEventListener('click', () => {
    men.classList.toggle("spread")
})

window.addEventListener('click', e=> {
    if(men.classList.contains('spread')
       && e.target != mn && e.target != men ){
           men.classList.toggle("spread")
    }
})