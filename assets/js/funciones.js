//alert("hola");
function crearLista() {
  var lista = document.getElementById('nombreLista').value;
  //console.log(lista)
  var nuevaLista = document.createElement("h3");
  nuevaLista.innerHTML = lista;
  document.getElementById('lista').appendChild(nuevaLista);
  //BORRA LA CASILLA//
  document.getElementById('nombreLista').value = "";

  /*var seccion = document.createElement("section");
  seccion.id = "lista";
  document.getElementById("lista").appendChild("lista");*/

  //BOTON QUE APARECE CUANDO LA LISTA SE CREA//
  var boton = document.createElement("input");
  boton.value = 'CREAR PENDIENTE';
  boton.type = 'button';
  boton.onclick = function () {crearPendienteNuevo()};
  //boton.onclick = "crearPendienteNuevo";
  nuevaLista.appendChild(boton);

  //INPUT QUE APARECE CUANDO LA LISTA SE CREA//
  var input = document.createElement("input");
  input.placeholder = "Agregar pendiente";
  input.type = "text";
  input.id = "agregarNuevoPendiente";

  // ul LISTA PARA QUE APAREZCA EN LA LISTA//
  var listaNueva = document.createElement("ul");
  listaNueva.id = "listaNuevaPublicar";

  document.getElementById('lista').appendChild(listaNueva);
  document.getElementById("lista").appendChild(input);
  document.getElementById('lista').appendChild(boton);

}

//FUNCIONA PARA LA "LISTA PARA CREAR"//
//creo que se tendrian que llamar la ul por getElementsByTagName
function crearPendienteNuevo(){
  var pendiente = document.getElementById('agregarNuevoPendiente').value;
  if(pendiente != ""){
    var nuevoPendiente = document.createElement("li");
    nuevoPendiente.innerHTML = pendiente;
    document.getElementById("listaNuevaPublicar").appendChild(nuevoPendiente);
    //BORRAR CASILLA//
    document.getElementById('agregarNuevoPendiente').value = "";
  }
}

//PRUEBA DE LA FUNCION//
//FUNCIONA EN LA "LISTA DE EJEMPLO"//
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
