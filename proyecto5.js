const libro = { //creando el objeto
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    año:1981,
    corriente: "realismo mágico", 
    estado: "disponible",

    informacion: function (){ //creando el metodo
    console.log(this.titulo + " es una obra escrita por " + this.autor + " en el año de " + this.año + ", pertenece a la corriente de " + this.corriente + " y esta " + this.estado)  
}

};

libro.informacion(); //imprimiendo la informacion del libro contenida en el metodo 

