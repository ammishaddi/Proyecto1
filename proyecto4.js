// Array de libros leidos 
let LibrosLeidos= ["Un mundo feliz", "El tunel"];

//Función para agregar un libro 
function AgregarLibro(Nombre){
    LibrosLeidos.push(Nombre); // Push para agregar al final 
}
 AgregarLibro("El laberinto de la soledad") //Llamar a al funcion para agregar libros
 AgregarLibro("1984")

function ListaLibros(){ //Funcion para mostrar el total de libros
    console.log(LibrosLeidos)
}

console.log("Los libros leídos son: " + LibrosLeidos) //Lamar a la segunda funcion que muestra los libros leidos, contenidos en el array







// mismo codigo pero poniendo "..." para que sin tener que llamar a al funcion varias veces, pueda agregar mas de un titulo
let LibrosLeidoss= ["Un mundo feliz", "El tunel"];

function AgregarLibros(...Nombres){
    LibrosLeidoss.push(...Nombres);
}

 AgregarLibros("1984", "La Odisea", "El laberinto de la soledad")

function ListaLibross(){
    console.log(LibrosLeidoss)
}

console.log("Los libros leídos son: " + LibrosLeidoss)