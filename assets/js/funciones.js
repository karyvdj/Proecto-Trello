//alert("hola");
function crearLista() {
  var lista = document.getElementById('nombreLista').value;
  //console.log(lista)
  var nuevaLista = document.createElement("h3");
  nuevaLista.innerHTML = lista;
  document.getElementById('lista').appendChild(nuevaLista);
  //borrar casilla//
  document.getElementById('nombreLista').value = "";

  var boton = document.createElement("button");
  var input = document.createElement("input");
  document.getElementById("lista").appendChild(input);
  document.getElementById('lista').appendChild(boton);

  /*Probando el createTextNode
  var lista = document.getElementById('nombreLista').value;
  //console.log(lista)
  var nuevaLista = document.createElement("p");
  var texto= document.createTextNode(lista);
  publicarLista.appendChild(texto);
  //publicarLista.innerHTML= lista*/
}


//Funciona en la lista de ejemplo//
function crearPendiente(){
  var pendiente = document.getElementById('agregarPendiente').value;
  if(pendiente != ""){
    var nuevoPendiente = document.createElement("li");
    nuevoPendiente.innerHTML = pendiente;
    document.getElementById("listaOrdenada").appendChild(nuevoPendiente);
    //borrar casilla//
    document.getElementById('agregarPendiente').value = "";
  }
}
