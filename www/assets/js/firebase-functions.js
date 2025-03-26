
// Configuración de Firebase
// Importante las versiones para 'firebase-app.js' y para 'firebase-firestore.js' en ambos casos debes ser las mismas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

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


//window.addEventListener("DOMContentLoaded", mostrarEmpleadosEnHTML);

/**
 * Función para agregar un nuevo empleado
 */
window.addNuevoUsuario = async function (event) {
  event.preventDefault();

  const formulario = document.querySelector("#formularioAlta");
  const formData = new FormData(formulario);

  // Convertir FormData a un objeto JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
    formDataJSON[key] = value;
  });

  const { nombre, correo, edad, sexo, imgInp, aficion1 } = formDataJSON;

  try {
    await addUsuario(nombre, correo, edad, sexo, imgInp, aficion1);
    formulario.reset();
    /*
    setTimeout(() => {
      $("#agregarEmpleadoModal").css("opacity", "");
      $("#agregarEmpleadoModal").modal("hide");
    }, 300);
    */
    window.mostrarAlerta({ tipoToast: "success", mensaje: "¡Usuario guardado!" });
  } catch (error) {
    console.log(error);
  }
};


/**
 * Función para mostrar alertas
 */
iziToast.settings({
    timeout: 10000,
    resetOnHover: true,
    // icon: '', // icon class
    transitionIn: "flipInX",
    transitionOut: "flipOutX",
    position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    onOpening: function () {
      console.log("Alerta abierta!");
    },
    onClosing: function () {
      console.log("Alerta cerrada!");
    },
  });
  window.mostrarAlerta = function ({ tipoToast, mensaje }) {
    if (tipoToast == "success") {
      iziToast.success({
        timeout: 5000,
        icon: tipoToast == "success" ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill",
        title: tipoToast == "success" ? "¡Éxito!" : "¡Error!",
        message: mensaje,
      });
    } else if (tipoToast == "warning") {
      iziToast.success({
        timeout: 5000,
        icon: tipo == "success" ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill",
        title: tipo == "success" ? "¡Éxito!" : "¡Error!",
        message: mensaje,
      });
    }
  };
  