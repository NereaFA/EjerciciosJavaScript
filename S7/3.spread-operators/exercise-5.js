// Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin 
// editar el array inicial. De nuevo, usando spread operatos.


let colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

// let elinimaElemento = colors.splice(1,1);
//console.log(colors);
// const colorsSin = [...colors];
// console.log(colorsSin);
//console.log(eliminaElemento);-> Devuelve el elemento eliminado

//Pone que sin modificar el array, pruebo otra forma:
let [color1,color2,color3,color4,color5]= colors; // destructuring 
let restoDatos = [color1,color3,color4,color5]; 
colors = [ color2, ...restoDatos]; //para separar el color que no quiero
colors = [...restoDatos]; // asigno el resto de colores
console.log(colors);