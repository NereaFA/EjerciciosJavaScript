//Basandote en el siguiente html, elimina todos los nodos que tengan
// la clase .fn-remove-me

//window.onload = () => {
const eliminaNodo = document.querySelectorAll('.fn-remove-me');
//console.log(eliminaNodo);
for(i=0;i<eliminaNodo.length; i++){
    eliminaNodo[i].remove();
}

//}

