
//PROYECTO 2 asignando notas usando if

let nota = Math.floor(Math.random() *  101); //determinar que la nota sera un numero aleatorio entre 0 y 100
let desempeño;
    if (nota >= 90){
        console.log(nota + " Excelente")
    }else if (nota >= 75 && nota <=89) {
    console.log(nota + " Bien");   
    }else if (nota >= 60 && nota <=74) {
        console.log(nota + " Suficiente"); 
    }else {
        console.log(nota + " no estas aprobado")
    } 


