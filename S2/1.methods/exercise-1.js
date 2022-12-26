//Haz un bucle y muestra por consola todos aquellos valores del array que 
//incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//console.log(products.includes("Camiseta"));

let palabra=0;
for ( i=0;i<products.length ;i++){
    if(products.includes('Camiseta')){
        palabra=products.includes('Camiseta'); 
     }
     console.log(palabra);
}