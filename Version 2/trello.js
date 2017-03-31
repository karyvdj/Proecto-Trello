var listas = [];

function Lista(id,titulo) {
  this.id = id;
  this.titulo = titulo;
  this.pendiente = []; //arreglo que contiene los pendientes
}

function crearLista() {
  var titulo = document.getElementById('nombreLista').value;
  var id = Date.now(); //generar id diferentes
  var lista = new Lista (id, titulo);
  listas.push(lista);// para que vaya la lita al arreglo vacio
  mostrarHTML(lista);//esta lista se refiere a la variable lista que se refiere al objeto

  //borrar();
}

 function mostrarHTML(lista) {
   var seccionContenedora = document.createElement("section");
   seccionContenedora.id = lista.id;// lista es el objeto y su propiedad id
   var contenedorLista = document.getElementById('contenedorLista');

//Creacion de input y boton en la lista de pendientes//
   var inputAñadir = document.createElement("input");
   inputAñadir.type = "text";

   var botonAñadir = document.createElement("input");
   botonAñadir.type = "button";
   botonAñadir.value = "ENVIAR PENDIENTE";
   botonAñadir.onClick = function (){
                         crearPendiente()
                         };
   botonAñadir.setAttribute("data-lista-id", lista.id); //

   var h3 = document.createElement("h3");
   h3.innerHTML = lista.titulo

  var lista = document.createElement("ul");


   //Agregar estos nodos en el html
   seccionContenedora.appendChild(h3);
   contenedorLista.appendChild(seccionContenedora);
   seccionContenedora.appendChild(inputAñadir);
   seccionContenedora.appendChild(botonAñadir);
   seccionContenedora.appendChild(lista);

   //borrar();
 }

function crearPendiente() {
  var elementoLista = document.createElement("li")


  lista.appendChild("li");

}

 /*function borrar(){
  var vacio= "";
 	document.getElementById("lista.id").value = vacio;

}*/
