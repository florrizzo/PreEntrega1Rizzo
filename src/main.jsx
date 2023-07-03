import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiYnD2PJwADOH7Quc6oA3ZY8PR_ydknvc",
  authDomain: "rizzo-ecommerce.firebaseapp.com",
  projectId: "rizzo-ecommerce",
  storageBucket: "rizzo-ecommerce.appspot.com",
  messagingSenderId: "110493044771",
  appId: "1:110493044771:web:5579a7ba0bcb139781e196"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
