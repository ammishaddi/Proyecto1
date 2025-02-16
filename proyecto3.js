/* ARRAY DE FRUTAS 
(con correciones de un amigo porque no me corria el codigo :c )*/

//Hacer un array-objeto para guardar los distintos tipos de fruta que existen 
let frutas= {
    acidas: ["manzana", "uva", "piña"], //frutas ácidas
    semiacidas: ["fresa", "frambuesa", "ciruela", "mango"], //frutas semiácidas
    neutras: ["coco"], //frutas neutras
    dulces: ["higo", "cereza"] //frutas dulces
    };
    
    let cesta = ["manzana", "uva", "fresa", "coco", "higo", "cereza"]; //array que se va a inspeccionar para contar los tipos de fruta
    
    
    let contadorFrutas = {  //iniciar el contador en 0
        acidas: 0,
        semiacidas: 0,
        neutras: 0,
        dulces: 0
    };
    
    
    let i = 0;
    
    while (i <= cesta.length) { //para que no se forme un bucle se limitan las iteraciones a la cantidad de frutas en la cesta (6)
        let fruta = cesta[i]; //en "fruta" se va a guardar el valor de la posicion que tenga i en el array de cesta. si i=0 entonces es manzana
        
        for (let tipo in frutas) { // va a ir recorriendo el array de frutas
            if (frutas[tipo].includes(fruta)) { //si en cada tipo se incluye la fruta (posicion i en cesta)
                contadorFrutas[tipo]++; //entonces se agrega 1, al contador del tipo que la contenga
            }
        }
        
        i++; // Avanzar en el array
        console.log(contadorFrutas); //para que imprima paso por paso el conteo
    }
    
    console.log(contadorFrutas); //imprimir solo el resultado final 
    