//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', 
//dentro de todos los div con la clase .fn-insert-here

const inDiv = document.querySelectorAll("div"); //querySelector devuelve array

for(i=0;i<inDiv.length;i++){ 

    if (inDiv[i].className === 'fn-insert-here'){ //Condicion para que coja la clase espcifica
         const inP = document.createElement('p'); 
        inP.textContent ='Voy dentro';  //Meter el texto dentro, propiedad del array
        inDiv[i].appendChild(inP); //En el recorrido del bucle que inserte p

    }
}

