// Función para enviar un mensaje a Firebase
function enviarMensaje() {
    const mensaje = document.getElementById("message").value;
    const refMensajes = database.ref('mensajes');
    refMensajes.push({
        usuario: "Usuario1",
        mensaje: mensaje,
        hora: new Date().toLocaleString(),
    }).then(() => {
        console.log("Mensaje enviado correctamente.");
    }).catch((error) => {
        console.error("Error al enviar el mensaje:", error);
    });
}
