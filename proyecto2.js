
//PROYECTO 2 asignando notas usando if

let nota = Math.floor(Math.random() *  101); //determinar que la nota sera un numero aleatorio entre 0 y 100
let desempeño;
    if (nota >= 90){
        console.log( " Excelente. Tu nota es " + nota)
    }else if (nota >= 75 && nota <=89) {
    console.log(" Bien. Tu nota es " +  nota);   
    }else if (nota >= 60 && nota <=74) {
        console.log( " Regular. Tu nota es " + nota); 
    }else {
        console.log(" No estas aprobado. Tu nota es " + nota)
    } 


