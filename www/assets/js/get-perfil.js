


    // Configuración de Firebase (reemplaza con tus valores o variables de entorno)
    var  config = {
        appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
        apiKey: "AIzaSyBj7pQy-V_rh2J_atjUvXimljShHUFf8M",
        authDomain: "flinker-8c0c9.web.app",
        databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
        projectId: "flinker-8c0c9",
        storageBucket: "flinker-8c0c9.firebasestorage.app",
        messagingSenderId: "244533337010"
        
      };

  // Inicializar Firebase
firebase.initializeApp(config);
const db = firebase.database();

// Función para obtener el valor de un parámetro de la URL
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Obtener el ID del usuario seleccionado (desde la URL)
const selectedUserId = getQueryParameter("usuario");

// Consultar Firebase para obtener el perfil del usuario seleccionado
if (selectedUserId) {
  db.ref("usuarios/" + selectedUserId).once("value").then(function(snapshot) {
    const userData = snapshot.val();
    if (userData) {
      // Verificar si el usuario está en línea
      const isOnline = userData.online ? "🟢 En línea" : "⚪ Desconectado";

      // Crear contenido del perfil
      const perfilHTML = `
        <div class="perfil-container">
          <img src="${userData.imagen !== "NONE" ? userData.imagen : "sin_foto.png"}" alt="Foto de ${userData.nombre}" class="perfil-foto">
          <div class="perfil-info">
            <h3>${userData.nombre || "Sin Nombre"}</h3>
            <p>${userData.email || "Sin Email"}</p>
            <span class="status">${isOnline}</span>
          </div>
        </div>
      `;
      $("#perfil").html(perfilHTML);
    } else {
      $("#perfil").html("<p>No se encontró el perfil del usuario.</p>");
    }
  }).catch(function(error) {
    console.error("Error obteniendo el perfil:", error);
    $("#perfil").html("<p>Error al cargar el perfil.</p>");
  });
} else {
  $("#perfil").html("<p>No se especificó ningún usuario.</p>");
}

// Obtener usuario actual (debe obtenerse desde autenticación en una aplicación real)
const currentUser = "UsuarioActual"; // Ajusta esto según tu lógica de usuario autenticado

// Enviar mensaje
document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();
  if (!message) return;
  messageInput.value = "";

  // Guardar mensaje en Firebase con sender, receiver, mensaje y timestamp
  db.ref("messages/" + timestamp).set({
    sender: currentUser,
    receiver: selectedUserId,
    message: message,
    timestamp: timestamp
  });
}

// Escuchar nuevos mensajes y mostrarlos
db.ref("messages/").on("child_added", function(snapshot) {
  const msg = snapshot.val();
  // Mostrar solo los mensajes entre el usuario actual y el usuario seleccionado
  if ((msg.sender === currentUser && msg.receiver === selectedUserId) ||
      (msg.sender === selectedUserId && msg.receiver === currentUser)) {
    // Formatear la hora a partir del timestamp
    const messageTime = new Date(msg.timestamp).toLocaleTimeString();
    // Mostrar solo el mensaje y la hora (el nombre se muestra en el perfil)
    const messageElement = `<li>${msg.message} <span class="timestamp">${messageTime}</span></li>`;
    document.getElementById("messages").innerHTML += messageElement;
    // Auto scroll al final del chat
    document.getElementById("messages").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
});
