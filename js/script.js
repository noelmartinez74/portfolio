const imagenes = document.querySelectorAll('.img-galeria');
const agregar = document.querySelector('.agregar-imagen');
const ampliar = document.querySelector('.imagen-ampliada');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})

ampliar.addEventListener('click', (e) =>{
    if(e.target !== agregar){
        ampliar.classList.remove('ver');
        agregar.classList.remove('verImg'); 
    }
})

const aparecerImagen = (imagen) =>{
    agregar.src = imagen;
    ampliar.classList.add('ver');
    agregar.classList.add('verImg');
}