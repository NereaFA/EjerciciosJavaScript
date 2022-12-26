// Usa un bucle forof para recorrer todos los juguetes y añade los que tengan más de 
// 15 ventas (`sellCount`) al array `popularToys`. Imprimelo por consola.

//let popularToys = [];
const toys = [
{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
{id: 11, name: 'Action Woman', sellCount: 24}, 
{id: 23, name: 'Barbie Man', sellCount: 15}, 
{id: 40, name: 'El gato con Guantes', sellCount: 8},
{id: 40, name: 'El gato felix', sellCount: 35}]

let popularToys = [];
for (ventas of toys){
    if(ventas.sellCount > 15){ 
    popularToys.push(ventas);   
    }
}
console.log(popularToys);

//