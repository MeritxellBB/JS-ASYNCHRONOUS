/*Iteración 1: Fetch
1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.*/

const getAgify = async () => {
    const result = await fetch('https://api.agify.io?name=michael');
    const agifyData = await result.json();
    console.log(agifyData);
}
getAgify();

/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/  //https://api.nationalize.io';//
const getNationalize = async () => {
    const name = document.querySelector('input').value; //recojo valor de input y lo utilizo como valor
    const result = await fetch(`https://api.nationalize.io?name=${name}`);
    const nationalizeData = await result.json();
    let myP = document.createElement("p");
    let myButton = document.createElement("button");
    myP.innerHTML = `El nombre ${nationalizeData.name} tiene un ${nationalizeData.country[0].probability} porciento de ser de ${nationalizeData.country[0].country_id}`;
    myButton.innerHTML = "Eliminar";
    myButton.addEventListener("click", function(){
        myP.parentNode.removeChild(myP);
        myButton.parentNode.removeChild(myButton);
    });
    document.body.appendChild(myP);
    document.body.appendChild(myButton);
    console.log(nationalizeData);
}


/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

//Hecho en el 2.1


/*2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/
