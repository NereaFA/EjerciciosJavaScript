const users = [{name: "Abel", years: 43}, 
{name: "Maria", years: 18}, 
{name: "Pedro", years: 14}, 
{name: "Samantha", years: 32}, 
{name: "Raquel", years: 16}];

for(let i=0; i<users.length;i++){
    const user = users[i];
    if(user.years < 18){
        console.log("Usuario menor de edad:" + user.name);
    }else if(user.years>=18){
            console.log("Usuario mayor de edad:" + user.name);
    }}
    //otra forma de ponerlo
    //for(let i=0; i<users.length;i++){
    //const user = users[i];
    //console.log(user.years>=18
    //?"Usuario menor de edad:"
    //:"Usuario menor de edad:"
    //user.name
    //);
    //}