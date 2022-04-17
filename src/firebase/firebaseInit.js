// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCQEAqWdrIODMyMbA6hKLzEP-YJfPUv1oE",
    authDomain: "photosician1.firebaseapp.com",
    projectId: "photosician1",
    storageBucket: "photosician1.appspot.com",
    messagingSenderId: "67807654878",
    appId: "1:67807654878:web:a0d8305f04b75c89d6234f"
};

// Initialize Firebase

const firebaseAuthInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInit;