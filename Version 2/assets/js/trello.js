var listas = [];

function Lista(id,titulo) {
  this.id = id;
  this.titulo = titulo;
  this.pendientes = []; //arreglo que contiene los pendientes

}

function Pendiente(id, contenido) { // Constructor de pendiente
  this.id = id;
  this.contenido = contenido;
}

function crearLista() {
  var titulo = document.getElementById('nombreLista').value;
  var id = Date.now(); //generar id diferentes
  var lista = new Lista (id, titulo);
  listas.push(lista);// para que vaya la lita al arreglo vacio
  borrarInput(titulo);
  mostrarHTML(lista);

}

function borrarInput(elemento) {
  var borrar = "elemento";
  nuevoValor = "";
  borrar.value = nuevoValor;
}

 function mostrarHTML(lista) {
   var seccionContenedora = document.createElement("section");

   var h3 = document.createElement("h3");
   h3.innerHTML = lista.titulo
   seccionContenedora.appendChild(h3);

   var botonBorrarLista = document.createElement("button");
   botonBorrarLista.innerText= "Borrar Lista";
   botonBorrarLista.onClick = function() {
       this.parentNode.parentNode.removeChild(this.parentNode);
   };
   seccionContenedora.appendChild(botonBorrarLista);

   var lista = document.createElement("ul");
    var idLista = document.createAttribute("id");
    idLista.value = Date.now();
    lista.setAttributeNode(idLista);
    seccionContenedora.appendChild(lista);

//Creacion de input y boton en la lista de pendientes//
   var inputPendiente = document.createElement("input");
   inputPendiente.placeholder = "Nuevo pendiente";
   seccionContenedora.appendChild(inputPendiente);

   var botonPendiente = document.createElement("button");
   botonPendiente.onClick = crearPendiente;
   botonPendiente.innerText = "Agregar pendiente";
   seccionContenedora.appendChild(botonPendiente);

   var contenedorLista = document.getElementById('contenedorLista');
   contenedorLista.appendChild(seccionContenedora);
 }

 function crearPendiente (){
   var id = Date.now();
   var cajaTexto = this.previousSibling;
   var contenidoPendiente = cajaTexto.value;
   var nuevoPendiente = new Pendiente(id,contenido);
 }

function mostrarPendiente(cajaTexto, nuevoPendiente) {
  var lista = cajaTexto.previousSibling;
    var pendienteNuevo = document.createElement("li");
    pendienteNuevo.innerText = nuevoPendiente.contenido;

    var botonBorrarPendiente = document.createElement("button");
    botonBorrarPendiente.innerText = "x";
    botonBorrarPendiente.onclick = function(){
        var lista = this.parentNode;
        lista.removeChild(this.previousSibling);
        lista.removeChild(this);
    };

    lista.appendChild(pendienteNuevo);
    lista.appendChild(botonBorrarPendiente);
}
