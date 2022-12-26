//Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here 
//el texto 'Wubba Lubba dub dub'.

//const insertH2 = document.createElement('h2').appendChild(document.createElement('h2'));
//insertH2.classList.add("fn-insert-here");

let insertText = document.querySelector('.fn-insert-here');
insertText.innerHTML = 'Wubba Lubba dub dub';
console.log(insertH2);

//getElementsByClassName(nombres)