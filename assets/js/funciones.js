//alert("hola");
function crearLista() {
  var lista = document.getElementById('nombreLista').value;
  //console.log(lista)
  var nuevaLista = document.createElement("h3");
  nuevaLista.innerHTML = lista;
  document.getElementById('lista').appendChild(nuevaLista);
  //BORRA LA CASILLA//
  document.getElementById('nombreLista').value = "";

  //BOTON QUE APARECE CUANDO LA LISTA SE CREA//
  var boton = document.createElement("input");
  boton.value = 'CREAR PENDIENTE';
  boton.type = 'button';
  //boton.onclick = function () {crearPendienteNuevo()};
  boton.onclick = "crearPendienteNuevo";
  nuevaLista.appendChild(boton);

  //INPUT QUE APARECE CUANDO LA LISTA SE CREA//
  var input = document.createElement("input");
  input.placeholder = "Agregar pendiente";
  input.type = "text";
  input.id = "agregarNuevoPendiente";

  document.getElementById("lista").appendChild(input);
  document.getElementById('lista').appendChild(boton);

  /*PROBANDO EL CREATETEXTNODE
  var lista = document.getElementById('nombreLista').value;
  //console.log(lista)
  var nuevaLista = document.createElement("p");
  var texto= document.createTextNode(lista);
  publicarLista.appendChild(texto);
  //publicarLista.innerHTML= lista*/
}
function crearPendienteNuevo(){
  var pendiente = document.getElementById('agregarNuevoPendiente').value;
  if(pendiente != ""){
    var nuevoPendiente = document.createElement("p");
    nuevoPendiente.innerHTML = pendiente;
    document.getElementById("lista").appendChild(nuevoPendiente);
    //BORRAR CASILLA//
    document.getElementById('agregarNuevoPendiente').value = "";
  }
}

//FUNCIONA EN LA LISTA DE EJEMPLO//
function crearPendiente(){
  var pendiente = document.getElementById('agregarPendiente').value;
  if(pendiente != ""){
    var nuevoPendiente = document.createElement("li");
    nuevoPendiente.innerHTML = pendiente;
    document.getElementById("listaOrdenada").appendChild(nuevoPendiente);
    //BORRA LA CASILLA//
    document.getElementById('agregarPendiente').value = "";
  }
}
