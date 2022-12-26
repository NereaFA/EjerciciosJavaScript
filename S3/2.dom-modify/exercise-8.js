//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!'
// entre los dos div. Recuerda que no solo puedes insertar elementos 
//con .appendChild.

const insertDiv = document.querySelectorAll('div');
const insertP = document.createElement('p');


document.body.insertBefore(insertP,insertDiv[1]);
//insertBefore(newnode, node) el nodo creado, la posicion
insertP.innerHTML = 'Voy en medio!';
//console.log(insertP);


//insertDiv.appendChild(insertP);
//document.body.appendChild(insertDiv);