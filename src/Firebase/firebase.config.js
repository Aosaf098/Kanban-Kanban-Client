// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCne2lgopkTDD3HnXP6hNQdP41g4H29h_o",
  authDomain: "kanban-kanban-40aa6.firebaseapp.com",
  projectId: "kanban-kanban-40aa6",
  storageBucket: "kanban-kanban-40aa6.firebasestorage.app",
  messagingSenderId: "749353612176",
  appId: "1:749353612176:web:5bacbc747b0380e1d53915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)