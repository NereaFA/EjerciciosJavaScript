//Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const boton = document.getElementById('btnToClick')
 boton.addEventListener('click', (evento) =>{

    //ev.preventDefault(); para evitar comportamiento de boton por defecto
    console.log('Mi evento', evento);
})






