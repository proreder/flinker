

//import { collection, addDoc } from "./firebase/firestore.js"; 
/**
 * ***************************************************************************
 * Acciones para el TODO (Create, Read, Update y Delete)
 * Una colección es equivalente a una tabla en una base de datos relacional.
 * Un Documento es equivalente a un registro en una tabla en una base de datos.
 * ***************************************************************************
 */
const coleccion = "usuarios";




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
  