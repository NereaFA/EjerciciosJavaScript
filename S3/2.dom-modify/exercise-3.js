//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop 
//con javascript.


const insertDiv = document.createElement("div");
document.body.appendChild(insertDiv);

for (i=0; i<6;i++){ //puse siete y me saco 7 cambie a 6 
    const insertP = document.createElement("p");
    insertDiv.appendChild(insertP);
    
}


