//Inserta dinamicamente en un html un div que contenga una p con javascript.

//Primero lo hice asi:
//const añadirDivP = document.createElement('div').appendChild(document.createElement('div'));
//añadirDivP.innerHTML = '<p>Lo saca?!</p>';
//console.log(añadirDivP);


const añadeDiv = document.createElement("div");
const añadeP = document.createElement("p");
añadeDiv.appendChild(añadeP);
document.body.appendChild(añadeDiv);
console.log(añadeDiv);

//const newDiv = document.createElement("div");
//newDiv.innerHTML = '<p>Nuevo elemento html</p>';
//divElement.appendChild(newDiv);

