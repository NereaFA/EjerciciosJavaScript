//Basandote en el siguiente html, añade un evento 'focus' que ejecute un 
//console.log con el valor del input.

const input$$ = document.body.querySelector('input');


const añadeEvento = (event) => console.log(event); //console.log(event.target.value) -> para guardar el valor que escribas en el input
input$$.addEventListener('focus',añadeEvento);

//para darle focus a un elemento con JavaScript, invocamos al método llamado 
//focus en el input o elemento. Por ejemplo: $elemento. focus()

//function foco(idElemento){
//    document.getElementById(idElemento).focus();
//   }

// const inputFocus = document.querySelector('.inputFocus');
//inputFocus.addEventListener('focus',(event)=> añadeEvento(event, aqui se puede añadir array));
// inputFocus.addEventListener('focus', () => añadeEvento(inputFocus.value));