import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_DBTCUhddaa7wsLPZqbmbSHzeV2NaeBI",
    authDomain: "autoaid28.firebaseapp.com",
    projectId: "autoaid28",
    storageBucket: "autoaid28.appspot.com",
    messagingSenderId: "969950203908",
    appId: "1:969950203908:web:6c8e5000d5739e23082551",
    measurementId: "G-7Y8LLYB042"
})

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
// export default db;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_DBTCUhddaa7wsLPZqbmbSHzeV2NaeBI",
    authDomain: "autoaid28.firebaseapp.com",
    projectId: "autoaid28",
    storageBucket: "autoaid28.appspot.com",
    messagingSenderId: "969950203908",
    appId: "1:969950203908:web:6c8e5000d5739e23082551",
    measurementId: "G-7Y8LLYB042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = app.firestore();
export const storage = app.storage();
*/