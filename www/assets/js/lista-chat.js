$(document).ready(function()
{
 
 // Inicializar la base de datos
 var config = {
    appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
    apiKey: "AIzaSyBj7pQy-V_rh2zJ_atjUvXimljShHUFf8M",
  authDomain: "flinker-8c0c9.web.app",
  databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
  projectId: "flinker-8c0c9",
  storageBucket: "flinker-8c0c9.firebasestorage.app",
  messagingSenderId: "244533337010"
  };
  
firebase.initializeApp(config);

// Asegúrate de inicializar Firebase antes de ejecutar este código
var database = firebase.database(); // Obtiene la referencia a la base de datos


var pag = "detalle.html";
var contenido = "<div class='image-list' style='display: flex; flex-wrap: wrap; gap: 10px;'>";

let listaUsuarios = []; // Lista para almacenar usuarios registrados

res.forEach(el => {
    var fila = el.data();
    listaUsuarios.push({ id: el.id, ...fila }); // Guardamos el usuario en la lista

    // Imagen representando al usuario con enlace a detalle.html
    contenido += `<div style="text-align: center;">
                    <img src="ver-detalle.png" alt="Ver Detalle" 
                         style="cursor:pointer; width:100px; height:100px; border-radius:10px;"
                         onclick='irADetalle("${el.id}")' />
                    <p>${fila.interno}</p>
                  </div>`;
});

contenido += "</div>";

document.getElementById("divListUnidades").innerHTML = contenido;

// Función para redirigir con el ID del usuario
function irADetalle(id) {
    window.location.href = pag + "?id=" + id;
}

// Verifica si los usuarios se están almacenando correctamente
console.log("Usuarios registrados:", listaUsuarios);
