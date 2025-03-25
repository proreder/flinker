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

console.log("Firebase inicializado correctamente.");








