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

/**
 * ***************************************************************************
 * Acciones para el TODO (Create, Read, Update y Delete)
 * Una colección es equivalente a una tabla en una base de datos relacional.
 * Un Documento es equivalente a un registro en una tabla en una base de datos.
 * ***************************************************************************
 */
const coleccion = "tbl_usuarios";

// Esta función agrega un nuevo usuario a una colección en Firestore, con los detalles proporcionados como nombre, correo, edad, sexo, email, imagen.
export const addUsuario = (nombre, correo, edad, sexo, email, imagen) =>
  addDoc(collection(db, coleccion), { nombre, correo, edad, sexo, email, imagen });

// Esta función obtiene todos los documentos de una colección de usuarios en Firestore y devuelve una promesa que se resuelve con los datos de esos documentos.
export const getUsuariosCollection = () => getDocs(collection(db, coleccion));
