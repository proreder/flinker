




// Configuración de Firebase
var config = {
  appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
  apiKey: "AIzaSyBj7pQy-V_rh2zJ_atjUvXimljShHUFf8M",
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

// Obtener el identificador del usuario seleccionado (por ejemplo, 'usuario' en la query string)
const selectedUserId = getQueryParameter("usuario");

// Consultar Firebase para obtener el perfil del usuario seleccionado
if (selectedUserId) {
  db.ref("usuarios/" + selectedUserId).once("value").then(function(snapshot) {
    const userData = snapshot.val();
    if (userData) {
      // Crear el contenido del perfil con la imagen, nombre y correo
      const perfilHTML = `
        <img src="${userData.imagen !== "NONE" ? userData.imagen : "sin_foto.png"}" alt="Foto de ${userData.nombre}">
        <h3>${userData.nombre || "Sin Nombre"}</h3>
        <p>${userData.email || "Sin Email"}</p>
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

// Escuchar el evento de submit para enviar mensajes
document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();
  if (!message) return;
  messageInput.value = "";
  
  // Guardar el mensaje en Firebase
  db.ref("messages/" + timestamp).set({
    sender: "TuNombre",  // Aquí debes usar el nombre del usuario actual
    receiver: selectedUserId,
    message: message,
    timestamp: timestamp
  });
}

// Escuchar nuevos mensajes y mostrarlos con scroll automático
db.ref("messages/").on("child_added", function(snapshot) {
  const msg = snapshot.val();

  // Mostrar solo los mensajes entre el usuario actual y el usuario seleccionado
  if ((msg.sender === "TuNombre" && msg.receiver === selectedUserId) ||
      (msg.sender === selectedUserId && msg.receiver === "TuNombre")) {
    
    const messageTime = new Date(msg.timestamp).toLocaleTimeString();
    
    // Crear el mensaje con clases para estilizarlo
    const messageElement = `<li class="message">
      <strong>${msg.sender}:</strong> ${msg.message}
      <span class="timestamp">${messageTime}</span>
    </li>`;

    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML += messageElement;

    // 📌 Hacer scroll automático al último mensaje
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});
