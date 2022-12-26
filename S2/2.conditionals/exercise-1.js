//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres 
//aprobados y añade la propiedad isApproved a true o false en consecuencia. Una 
//vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let numTrim =0;
for (let i=0; i<alumns.length; i++) {
    let numTrim = 0;
    const elements = alumns[i];
    if (element.T1 === true){
        numTrim++
    } if (element.T2 === true){
        numTrim++
    } if (element.T3 === true){
        numTrim++
    } 
    if (numTrim>=2){
        element.isAproved = true;
    }else{
        element.isAproved = false;
    }
}
console.log(alumns);

//otra Solucion con ternario
//const element = alumns[i];
//element.T1 ? numTrim++ : numTrim;
//element.T2 ? numTrim++ : numTrim;
//element.T3 ? numTrim++ : numTrim;
//element.isAproved = numTrim >= 2 ? true : false;