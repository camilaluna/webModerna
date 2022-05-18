const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menu1 = document.querySelector('mn')

imagenes.forEach(imagen => {
    imagen.appEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) => {
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity = '0'
}