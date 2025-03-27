//import "./firebase/firestore.js";
//import "./firebase/firebase.js";

// Configuración de Firebase
// Importante las versiones para 'firebase-app.js' y para 'firebase-firestore.js' en ambos casos debes ser las mismas
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from ".https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSzQsL2S7rJPl6FQPmaDpZoxBkeygO76s",
  authDomain: "my-flinker-project-id.firebaseapp.com",
  databaseURL: "https://my-flinker-project-id-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-flinker-project-id",
  storageBucket: "my-flinker-project-id.firebasestorage.app",
  messagingSenderId: "984525672081",
  appId: "1:984525672081:web:a181cc7679a5cef6edf930",
  measurementId: "G-55MQ4SSF00"
};

console.log("antes");
// Initialize Firebase
const app=initializeApp(firebaseConfig);
console.log("Firebase inicializado correctamente.");
//const analytics = getAnalytics(app);
console.log("Firebase .");
let db;
try {
  db = getFirestore(app);
   console.log("Firestore instance:", db);
} catch (error) {
  console.error("Error initializing Firestore:", error.message);
  console.error("Error Stack:", error.stack);
  console.error("Error Details:", error);
}

console.log("Firebase .");























