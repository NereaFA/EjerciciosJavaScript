//Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (datos in alien) {
    datos = alien.name + alien.race + alien.planet + alien.weight;
    console.log(datos);
  }

  //for (prop in personList[0]) {
  //  console.log('props',prop);
  //}