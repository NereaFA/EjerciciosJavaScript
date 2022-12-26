//Basandote en el siguiente html, añade un evento 'input' que ejecute un 
//console.log con el valor del input.



const input$$ = document.body.querySelector('input'); //No se si esto es correcto


const añadeEvento = (event) => console.log(event.target.value);
input$$.addEventListener('input',añadeEvento);