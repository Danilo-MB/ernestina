// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBq_SHeorpEm0g1bwMrlvrlc3fojq5rIQc",
    authDomain: "ernestina-ada0c.firebaseapp.com",
    projectId: "ernestina-ada0c",
    storageBucket: "ernestina-ada0c.appspot.com",
    messagingSenderId: "846780551248",
    appId: "1:846780551248:web:babcdf3640dc8824bc8155",
    measurementId: "G-YC4NGNF9H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);