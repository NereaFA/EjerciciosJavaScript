// En base al siguiente javascript, usa destructuring para crear las variables name 
// y itv con sus respectivos valores. Posteriormente crea 3 variables usando 
// igualmente el destructuring para cada uno de los años y comprueba que todo esta 
// bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

 const{name,itv} = car;

 let [año1,año2,año3] = itv; //Sirve solo con poner el elemento, asocia cada valor por orden en las variables creadas.

 console.log(año1);
 console.log(año2);
 console.log(año3);


 //console.log(año1[0]);

// const{año1} = car.itv[0];
// console.log(año1);
//console.log(car['itv'][0])


//const{año1} = car.itv
//console.log(itv[1]);
