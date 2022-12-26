// Dado el siguiente javascript, usa .find() para econtrar el alien de 
// nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los 
// encuentres, añade la propiedad .mutation al alien con el valor de la 
// mutación encontrada.


const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},
{name: 'Paktu', planet: 'Andromeda', age: 32},
{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

// const newArray = aliens.find((nombre)=>nombre === 'Cucushumushu');
// console.log(newArray);

// let mutation = mutations.find((item) => item.name === 'Porompompero');
// let alien = aliens.find((item) => item.name === 'Cucushumushu');    //item recorre el array
// alien.mutacion = mutation; //añadir propiedad a un objeto
//console.log(mutation);

//primero encuentra el objeto a partir de .mutacion le añado la propiedad a ese objeto.
aliens.find((item) => item.name === 'Cucushumushu').mutation = mutations.find((item) => item.name === 'Porompompero');


console.log(aliens); 

