
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//cargamos las funciones de ususrios
import {
  addUsuario,
  getUsuariosCollection,
 } from "./firebase-functions.js";
// Configuración de Firebase
// Importante las versiones para 'firebase-app.js' y para 'firebase-firestore.js' en ambos casos debes ser las mismas


// Firebase configuration (replace with your actual project details)
const firebaseConfig = {
    apiKey: "AIzaSyDSzQsL2S7rJPl6FQPmaDpZoxBkeygO76s",
    authDomain: "my-flinker-project-id.firebaseapp.com",
    projectId: "my-flinker-project-id",
    storageBucket: "my-flinker-project-id.firebasestorage.app",
    messagingSenderId: "984525672081",
    appId: "1:984525672081:web:a181cc7679a5cef6edf930",
    measurementId: "G-55MQ4SSF00"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Inicializa Cloud Firestore y obtén una referencia al servicio.
export const db = getFirestore(app);

//coleccion usuarios
const coleccion="usuarios";
// Esta función agrega un nuevo usuario a una colección en Firestore, con los detalles proporcionados como nombre, correo, edad, sexo, email, imagen.
export const addUsuario = (nombre, correo, edad, sexo, email, imagen) =>
  addDoc(collection(db, ccoleccion), { nombre, correo, edad, sexo, email, imagen });

// Esta función obtiene todos los documentos de una colección de usuarios en Firestore y devuelve una promesa que se resuelve con los datos de esos documentos.
export const getUsuariosCollection = () => getDocs(collection(db, coleccion));



console.log("Firebase inicializado correctamente.");








