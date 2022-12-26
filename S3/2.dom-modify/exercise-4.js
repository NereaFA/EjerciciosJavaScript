//Inserta dinamicamente con javascript en un html una p con el texto
// 'Soy dinámico!'.

const añadePTexto = document.createElement('p').appendChild(document.createElement('p'));
añadePTexto.innerHTML = 'Soy dinamico!';
console.log(añadePTexto);

//No me estaba saliendo porque si pongo añadePTexto.innerHTML ='<p>Jeloooooouuuu<p>';
//me crea otro p dentro del que ya he creado antes!!CUIDADO