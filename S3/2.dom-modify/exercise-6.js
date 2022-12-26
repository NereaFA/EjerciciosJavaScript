//Basandote en el siguiente array crea una lista ul > li con los textos del array 
//y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const insertUl = document.createElement("ul");
document.body.appendChild(insertUl);

for(i=0;i<apps.length;i++){
    const insertLi = document.createElement("li");
    insertUl.appendChild(insertLi);
    insertLi.textContent = apps[i];
}



//const newDiv = document.createElement("div");
//newDiv.innerHTML = '<p>Nuevo elemento html</p>';
//divElement.appendChild(newDiv);


//const insertDiv = document.createElement("div");
//document.body.appendChild(insertDiv);

//for (i=0; i<6;i++){ //puse siete y me saco 7 cambie a 6
    //const insertP = document.createElement("p",[i]); //[i] para la longitud del array
    //insertDiv.appendChild(insertP);

