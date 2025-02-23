document.getElementById("enviar").addEventListener("click", function(event) { //creando una funcion para ir agregando los comentarios cada que se presione el botón
    event.preventDefault(); // no guardaba los comentarios que hacia, desaparecian luego luego asi que buscando encontre esto para corregir
    let comentarioTexto = document.getElementById("comentario").value.trim(); //asociando con el html

       

        let nuevoComentario = document.createElement("p"); //creando variable para crear un nuevo elemento (parrafo) 
        nuevoComentario.classList.add("comentario"); //crear clase en CSS para poder editar los diseños
        nuevoComentario.textContent = comentarioTexto;  //asociar con la variable de antes 

        
        document.body.appendChild(nuevoComentario); // Agregar el comentario al body del html

        
        document.getElementById("comentario").value = ""; /* cuando enviaba el comentario, aparecia abajo pero no desaparecia del
        cuadro donde estaba escribiendo, o sea, se iban acumulando los comentarios, busque como solucionarlo y encontre este que funciono
        pero todavia no me queda muy claro como funciona esta parte */
    });

    