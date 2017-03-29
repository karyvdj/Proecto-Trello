//alert("hola");
function crearLista() {
  var lista = document.getElementById('nombreLista').value;
  var publicarLista = document.createElement("p");
  var texto= document.createTextNode(lista);
  publicarLista.appendChild(texto);
  //publicarLista.innerHTML= lista;
}
