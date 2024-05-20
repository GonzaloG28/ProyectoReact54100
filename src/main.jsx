import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBlv2qvqk9Ae4XargFOe-m4Cy-EoNLIE",
  authDomain: "proyectoreact-coder-2e770.firebaseapp.com",
  projectId: "proyectoreact-coder-2e770",
  storageBucket: "proyectoreact-coder-2e770.appspot.com",
  messagingSenderId: "623803188003",
  appId: "1:623803188003:web:81194793ceae4a57d54296"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
