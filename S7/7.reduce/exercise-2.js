// Dado el siguiente array, haz una suma de todos las notas de los examenes 
// de los alumnos que esten aprobados usando la función .reduce().

// El resultado sería 42.

const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


const sumaAprobados = exams.filter((aprobado)=>
aprobado.score >=5)
.map((aprobado)=> aprobado.score)
.reduce((acumulador, examen) => acumulador + examen,0);
console.log(sumaAprobados);

// const sumaAprobados = exams.reduce((acumulador,examen) => exams.score>5 ? acumulador + examen.score : acumulador,0);
// console.log(sumaAprobados);
// const sumaAprobados = exams.reduce(
//     (acumulador, examen) =>{
//     if(examen.score>5){
//         return acumulador + examen.score
//     }}
// ,0)  NO ME DEVUELVE EL RESULTADO

// const sumaAprobados = exams.reduce((acumulador,examen) =>{
//     return acumulador + (examen.score>=5);
// })
// console.log(sumaAprobados);
