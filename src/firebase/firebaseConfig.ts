// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDNeZfMlLO6Ql0QueVlXt29C9nWQjETCFA",
    authDomain: "ernestina-9c78b.firebaseapp.com",
    projectId: "ernestina-9c78b",
    storageBucket: "ernestina-9c78b.appspot.com",
    messagingSenderId: "850912819448",
    appId: "1:850912819448:web:372c5d96828b12958c230d",
    measurementId: "G-GCNGMZGLHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
const analytics = getAnalytics(app);