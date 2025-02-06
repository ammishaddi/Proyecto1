console.log("Proyecto1");

console.log("Datos primitivos")

//LISTADO DE DATOS PRIMITIVOS 
let ingrediente= "huevos"; //string
let cantidad= 2; //number
let SeCocina= true; //boolean
let mantequilla; //undefined
let decoracion= null; //null

let numeroGrande= 6114500n; //biginit
let id = Symbol("id"); // symbol

//comprobación de datos primitivos
console.log(typeof ingrediente);
console.log(typeof cantidad);
console.log(typeof SeCocina);
console.log(typeof mantequilla);
console.log(typeof decoracion);
console.log(typeof numeroGrande);
console.log(typeof id);


// lista de numeros y como se determina la posición 
let numeros = [12, 13, 14, 15, 16]
console.log(numeros[1]);

//ejemplo de funcion (resta)
let resta= function resta(a,b) {return a - b}
console.log(resta(10,5));